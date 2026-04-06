// src/app/api/leetcode/route.js
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const QUERY = `
  query userStats($username: String!) {
    allQuestionsCount { difficulty count }
    matchedUser(username: $username) {
      profile { ranking reputation }
      submitStatsGlobal { acSubmissionNum { difficulty count } }
    }
  }
`;

function toMap(list = []) {
  return list.reduce((acc, { difficulty, count }) => {
    acc[difficulty.toLowerCase()] = count || 0;
    return acc;
  }, {});
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username)
      return NextResponse.json(
        { success: false, message: "Missing ?username" },
        { status: 400 },
      );

    // Step 1: get a CSRF token from LeetCode
    let csrfToken = "";
    let cookieHeader = "";
    try {
      const csrfRes = await fetch("https://leetcode.com/", {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        cache: "no-store",
      });
      const setCookie = csrfRes.headers.get("set-cookie") || "";
      const match = setCookie.match(/csrftoken=([^;]+)/);
      if (match) {
        csrfToken = match[1];
        cookieHeader = `csrftoken=${csrfToken}`;
      }
    } catch {
      // proceed without CSRF token — may still work
    }

    const headers = {
      "content-type": "application/json",
      referer: "https://leetcode.com/",
      origin: "https://leetcode.com",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    };

    if (csrfToken) {
      headers["x-csrftoken"] = csrfToken;
      headers["cookie"] = cookieHeader;
    }

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({ query: QUERY, variables: { username } }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`LeetCode responded with status ${res.status}`);
    }

    const data = await res.json();

    if (!data.data?.matchedUser) {
      throw new Error("User not found or LeetCode blocked the request");
    }

    const all = toMap(data.data.allQuestionsCount);
    const solved = toMap(
      data.data.matchedUser.submitStatsGlobal.acSubmissionNum,
    );

    const totalQuestions =
      (all.easy || 0) + (all.medium || 0) + (all.hard || 0);
    const totalSolved =
      (solved.easy || 0) + (solved.medium || 0) + (solved.hard || 0);

    return NextResponse.json({
      success: true,
      username,
      totalQuestions,
      totalSolved,
      remaining: Math.max(totalQuestions - totalSolved, 0),
      easyQuestions: all.easy || 0,
      mediumQuestions: all.medium || 0,
      hardQuestions: all.hard || 0,
      easySolved: solved.easy || 0,
      mediumSolved: solved.medium || 0,
      hardSolved: solved.hard || 0,
      ranking: data.data.matchedUser.profile.ranking,
      reputation: data.data.matchedUser.profile.reputation,
    });
  } catch (err) {
    // Return a structured error so the frontend can show a graceful fallback
    // instead of a broken loading spinner
    return NextResponse.json(
      {
        success: false,
        message: err.message,
        fallback: true,
      },
      { status: 500 },
    );
  }
}

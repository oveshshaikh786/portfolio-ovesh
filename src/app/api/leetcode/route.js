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
        { status: 400 }
      );

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        referer: "https://leetcode.com/",
        "user-agent":
          "Mozilla/5.0 (PortfolioApp/1.0; +https://oveshshaikh.dev)",
      },
      body: JSON.stringify({ query: QUERY, variables: { username } }),
      cache: "no-store",
    });

    if (!res.ok) throw new Error("LeetCode API error");

    const data = await res.json();
    const all = toMap(data.data.allQuestionsCount);
    const solved = toMap(
      data.data.matchedUser.submitStatsGlobal.acSubmissionNum
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
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

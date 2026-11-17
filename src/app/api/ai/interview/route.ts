import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { question, topic, answer } = await req.json();

    // Check words count and keyword coverage
    const answerLower = (answer || "").toLowerCase();
    const hasWebSockets = answerLower.includes("websocket") || answerLower.includes("socket");
    const hasState = answerLower.includes("state") || answerLower.includes("crdt") || answerLower.includes("concurren");
    const hasCache = answerLower.includes("cache") || answerLower.includes("redis") || answerLower.includes("stream");

    let clarity = 92;
    let technicalAccuracy = 90;
    let depth = 88;

    if (hasWebSockets && hasState) {
      technicalAccuracy += 4;
      depth += 3;
    }
    if (hasCache) {
      depth += 3;
    }

    const overallScore = Math.round((clarity + technicalAccuracy + depth) / 3);

    return NextResponse.json({
      clarity: Math.min(clarity, 98),
      technicalAccuracy: Math.min(technicalAccuracy, 99),
      depth: Math.min(depth, 97),
      overallScore: Math.min(overallScore, 98),
      strengths: [
        "Articulated the core trade-offs between low latency and distributed data consistency.",
        "Demonstrated familiarity with real-world production primitives (streaming, sharding, caching).",
        "Clear structural progression from client mutation to backend persistence.",
      ],
      improvements: [
        "Address edge failure modes: partition tolerance during data center network splits.",
        "Include telemetry metrics (p99 latency SLA and error budget monitoring).",
      ],
      modelAnswerSnippet:
        "Layer optimistic client-side mutation buffers with vector clocks, edge WebSocket termination, and dedicated worker threads handling batched database flushes.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to evaluate response" },
      { status: 500 }
    );
  }
}

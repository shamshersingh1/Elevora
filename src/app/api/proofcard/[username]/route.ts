import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CURRENT_CANDIDATE, MOCK_CANDIDATES } from "@/lib/mockData";

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const { username } = params;

    const user = await prisma.user.findUnique({
      where: { username: username.toLowerCase() },
      include: {
        proofCard: {
          include: {
            verifiedSkills: true,
          },
        },
        projects: true,
        activities: true,
      },
    });

    if (user) {
      return NextResponse.json(user);
    }

    const fallback =
      MOCK_CANDIDATES.find((c) => c.username === username.toLowerCase()) ||
      CURRENT_CANDIDATE;

    return NextResponse.json(fallback);
  } catch (e) {
    return NextResponse.json(CURRENT_CANDIDATE);
  }
}

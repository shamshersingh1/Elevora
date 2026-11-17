import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MOCK_CANDIDATES } from "@/lib/mockData";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      where: { role: "CANDIDATE" },
      include: {
        proofCard: {
          include: {
            verifiedSkills: true,
          },
        },
        projects: true,
      },
    });

    if (users.length > 0) {
      return NextResponse.json(users);
    }

    return NextResponse.json(MOCK_CANDIDATES);
  } catch (e) {
    return NextResponse.json(MOCK_CANDIDATES);
  }
}

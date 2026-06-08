import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().max(100).optional(),
  email: z.string().email(),
  phone: z.string().max(32).optional(),
  service: z.string().min(1),
  budget: z.string().max(100).optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", details: result.error.format() },
      { status: 400 },
    );
  }

  return NextResponse.json({ message: "Contact request received.", data: result.data }, { status: 201 });
}

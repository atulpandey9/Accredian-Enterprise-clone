import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


export async function POST(request) {
  try {
    const data = await request.json();


    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and Email are required.' }, { status: 400 });
    }

    const leadRecord = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...data
    };

    console.log("✅ New Lead Captured:", leadRecord);


    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      leadId: leadRecord.id
    }, { status: 201 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

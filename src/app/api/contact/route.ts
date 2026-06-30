import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactPayload = {
  name: string
  email: string
  company?: string
  projectType?: string
  budget?: string
  message: string
}

const RECIPIENT_EMAIL = 'firenzeweblab@gmail.com'

// Resend requires RESEND_API_KEY in .env.local.
// Sign up free at https://resend.com, verify your sending domain,
// then add:  RESEND_API_KEY=re_xxxxxxxxxxxx
// For the `from` address use a verified domain email, e.g.:
//   RESEND_FROM_EMAIL=contact@firenzeweblab.com
// During local testing you may use onboarding@resend.dev (only delivers
// to the address registered with your Resend account).
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? 'Contact Form <onboarding@resend.dev>'

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      // No transport configured yet — log only so the site stays functional
      console.warn('[contact] RESEND_API_KEY not set — email not sent.')
      console.log('[contact] Submission:', {
        from: body.email,
        name: body.name,
        message: body.message,
      })
      return NextResponse.json(
        { success: true, message: 'Message received. We will get back to you within 24 hours.' },
        { status: 200 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: body.email,
      subject: `New enquiry from ${body.name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
        ${body.projectType ? `<p><strong>Project type:</strong> ${body.projectType}</p>` : ''}
        ${body.budget ? `<p><strong>Budget:</strong> ${body.budget}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${body.message}</p>
      `.trim(),
    })

    return NextResponse.json(
      { success: true, message: 'Message received. We will get back to you within 24 hours.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

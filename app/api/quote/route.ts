import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Extract form data
    const {
      name,
      company,
      email,
      phone,
      service,
      sqft,
      city,
      address,
      message
    } = body

    // Validate required fields
    if (!name || !company || !email || !phone || !service || !city) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const emailSubject = `NEW QUOTE REQUEST - ${company} (${city})`
    const emailBody = `
New Quote Request from The Total Facility Services Website

=== CUSTOMER INFORMATION ===
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

=== PROJECT DETAILS ===
Service Requested: ${service}
City: ${city}
Facility Square Footage: ${sqft || 'Not specified'}
Facility Address: ${address || 'Not provided'}

=== ADDITIONAL DETAILS ===
${message || 'None provided'}

=== CONTACT INSTRUCTIONS ===
This lead came in from your website. Please respond within 1 hour for best conversion.

Submitted at: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/New_York',
  year: 'numeric',
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}
    `.trim()

    console.log('Quote request received:', {
      name,
      company,
      email,
      phone,
      service,
      city,
      sqft,
      address,
      message
    })

    // TODO: Add email service integration here
    // For now, we'll just log it and return success
    // You can integrate with services like:
    // - Resend
    // - SendGrid  
    // - AWS SES
    // - Nodemailer with SMTP

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: 'Quote request received successfully'
    })

  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}

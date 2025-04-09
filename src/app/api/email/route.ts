import {Resend} from 'resend';
import { NextResponse } from 'next/server';
import { SlackConfirmEmail } from '@/emails/welcom';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req : Request) {

    const {email}= await req.json();
    console.log(email);
    
    await resend.emails.send({
        from: 'Info <no-reply@healthyheartjourney.com>',
        to: 'boris.parrales.m@gmail.com',
        subject: 'Info Request',
        react: SlackConfirmEmail({
            email: email,
        })
      });

      return NextResponse.json({
        message: 'Email sent successfully',
      });

}
import type { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const ALLOWED_ORIGINS = [
  'https://github.com/MSH38/watermelon-company',
  'https://watermelon-events.netlify.app',
]; 


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[\p{L}\p{M}\s'.-]{2,50}$/u;

const sanitize = (value: unknown = ''): string =>
  typeof value === 'string'
    ? value
        .replace(/[\u0000-\u001F\u007F]/g, '') // control chars
        .replace(/[<>]/g, '') // no tags
        .trim()
    : '';

const getOrigin = (event: any): string => event.headers?.origin || '';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const handler: Handler = async (event) => {
  const origin = getOrigin(event);
  const corsOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : ALLOWED_ORIGINS[0]; // fallback to first allowed

  const commonHeaders = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: commonHeaders,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: commonHeaders,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  if (!resend) {
    console.error('Missing RESEND_API_KEY environment variable');
    return {
      statusCode: 500,
      headers: commonHeaders,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const rawName = String(body.name ?? '');
    const rawEmail = String(body.email ?? '');
    const rawMessage = String(body.message ?? '');
    const botField = String(body.botField ?? ''); 

    if (botField) {
      return {
        statusCode: 200,
        headers: commonHeaders,
        body: JSON.stringify({ ok: true }),
      };
    }

    const name = sanitize(rawName);
    const email = sanitize(rawEmail);
    const message = sanitize(rawMessage);

    if (!name || name.length < 2 || name.length > 50 || !NAME_REGEX.test(name)) {
      return {
        statusCode: 400,
        headers: commonHeaders,
        body: JSON.stringify({ error: 'Invalid name' }),
      };
    }

    // 7) Validate email
    if (!email || email.length > 100 || !EMAIL_REGEX.test(email)) {
      return {
        statusCode: 400,
        headers: commonHeaders,
        body: JSON.stringify({ error: 'Invalid email' }),
      };
    }

    if (!message || message.length < 10 || message.length > 2000) {
      return {
        statusCode: 400,
        headers: commonHeaders,
        body: JSON.stringify({ error: 'Invalid message' }),
      };
    }

    const textBody =
      `New message from your portfolio:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n`;

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'm.samy1011997@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: textBody,
    });

    return {
      statusCode: 200,
      headers: commonHeaders,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: commonHeaders,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

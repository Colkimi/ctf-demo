import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Hidden-Content', 'genius{hidden_endpoint_discovered}');

  return res.status(200).json({
    success: true,
    message: 'You found the hidden endpoint!',
    secret: 'genius{hidden_api_endpoint}',
    hint: 'Check response headers too!'
  });
}

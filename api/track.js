export default async function handler(req, res) {
    // This pulls the URL from your Vercel Environment Variables
    const secretWebhook = process.env.DISCORD_WEBHOOK_URL;

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        await fetch(secretWebhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

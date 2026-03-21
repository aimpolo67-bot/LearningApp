export default async function handler(req, res) {
    const webhookURL = process.env.DISCORD_WEBHOOK_URL;

    // Check if the URL actually exists in Vercel settings
    if (!webhookURL) {
        return res.status(500).json({ error: 'Webhook URL is missing in Vercel Settings' });
    }

    if (req.method === 'POST') {
        try {
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body),
            });

            if (response.ok) {
                return res.status(200).json({ message: 'Success' });
            } else {
                return res.status(500).json({ error: 'Discord rejected the request' });
            }
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

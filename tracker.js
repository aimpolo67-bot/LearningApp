const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/YOUR_NUMBERS_HERE";

function trackActivity(level, item, isCorrect) {
    const status = isCorrect ? "✅ Correct" : "❌ Wrong";
    const data = {
        content: `**${level}**\nWord: ${item}\nResult: ${status}`
    };

    fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(err => console.error("Error sending to Discord:", err));
}

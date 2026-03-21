// This is your Master Tracker
function trackActivity(lessonName, question, wasCorrect) {
    // Hidden Safety: Don't track if the Developer is testing
    if (localStorage.getItem('is_developer')) return;

    // 1. YOUR DISCORD URL GOES HERE (Replace the link below)
    const WEBHOOK_URL = "https://discord.com/api/webhooks/YOUR_WEBHOOK_URL_HERE";

    const status = wasCorrect ? "✅ Correct" : "❌ Wrong";
    
    // 2. Pointing to Discord instead of /api/track
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: "Hàn yǔ Quiz Bot", // This shows as the "sender" name
            content: `**${lessonName}**\n> Result: ${status}\n> Word: *"${question}"*`
        })
    }).catch((err) => console.log("Track failed:", err)); 
}

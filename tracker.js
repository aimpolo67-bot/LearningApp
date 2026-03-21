function trackActivity(lessonName, question, wasCorrect) {
    console.log("Attempting to track:", lessonName, question);

    if (localStorage.getItem('is_developer')) {
        console.log("Tracking blocked: Developer Mode is ON");
        return;
    }

    const WEBHOOK_URL = "https://discord.com/api/webhooks/1484870438944374834/hGWeMMgWwJ4iS4n9UxMlDi0FNfEFbLArmLdHkBXgy3stVDyy1Zk6bwz_Mx-dJ78YMDob";

    // REMOVED mode: 'no-cors' so Discord can read the JSON
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: "Quiz Master",
            content: `**${lessonName}** | ${wasCorrect ? "✅" : "❌"} | *${question}*`
        })
    })
    .then(response => {
        if (!response.ok) throw new Error('Discord rejected the request');
        console.log("Track sent to Discord!");
    })
    .catch((err) => console.error("Discord Error:", err));
}

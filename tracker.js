function trackActivity(lessonName, question, wasCorrect) {
    console.log("Attempting to track:", lessonName, question); // <--- ADD THIS

    if (localStorage.getItem('is_developer')) {
        console.log("Tracking blocked: Developer Mode is ON");
        return;
    }

    const WEBHOOK_URL = "https://discord.com/api/webhooks/1484870438944374834/hGWeMMgWwJ4iS4n9UxMlDi0FNfEFbLArmLdHkBXgy3stVDyy1Zk6bwz_Mx-dJ78YMDob";

    fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', // <--- ADD THIS to bypass some browser blocks
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `**${lessonName}** | ${wasCorrect ? "✅" : "❌"} | *${question}*`
        })
    })
    .then(() => console.log("Track sent to Discord!"))
    .catch((err) => console.error("Discord Error:", err));
}

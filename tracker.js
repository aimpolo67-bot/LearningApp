// This is your Master Tracker
function trackActivity(lessonName, question, wasCorrect) {
    // Hidden Safety: Don't track if the Developer is testing
    if (localStorage.getItem('is_developer')) return;

    const status = wasCorrect ? "✅" : "❌";
    
    fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: lessonName,
            content: `**Activity:** ${status} | Word: *"${question}"*`
        })
    }).catch(() => {}); // Silent fail
}

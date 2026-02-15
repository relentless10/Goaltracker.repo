// Initialize Telegram WebApp
let tg = window.Telegram.WebApp;
tg.expand(); // Expand to full height

// Set theme
document.body.style.backgroundColor = tg.backgroundColor;

// Get user info
const user = tg.initDataUnsafe.user;
console.log('User:', user);

// Functions
function newJournal() {
    document.getElementById('content').innerHTML = `
        <h2>📝 New Journal Entry</h2>
        <textarea id="journalText" placeholder="What's on your mind today?" 
                  style="width:100%; height:150px; padding:10px; border-radius:8px; border:1px solid #ddd;"></textarea>
        <button class="btn" onclick="saveJournal()" style="margin-top:10px; width:100%;">Save Entry</button>
    `;
}

function saveJournal() {
    const text = document.getElementById('journalText').value;
    if (text.trim()) {
        // TODO: Save to backend/localStorage
        tg.showAlert('✅ Journal entry saved!');
        document.getElementById('content').innerHTML = '<p>Entry saved for today!</p>';
    } else {
        tg.showAlert('Please write something first!');
    }
}

function viewGoals() {
    document.getElementById('content').innerHTML = `
        <h2>🎯 My Goals</h2>
        <div class="goal-item">
            <p>💪 Fitness Goal - 12/30 days</p>
            <div style="background:#ddd; height:10px; border-radius:5px; margin:5px 0;">
                <div style="background:#3390ec; width:40%; height:100%; border-radius:5px;"></div>
            </div>
        </div>
        <button class="btn" style="margin-top:15px;">➕ Add New Goal</button>
    `;
}

function viewProgress() {
    document.getElementById('content').innerHTML = `
        <h2>📊 Your Progress</h2>
        <p>📝 5 journal entries this week</p>
        <p>🎯 3 goals updated</p>
        <p>🔥 Longest streak: 12 days</p>
    `;
}

function supportBot() {
    document.getElementById('content').innerHTML = `
        <h2>☕ Support GoalJournal</h2>
        <p>Help keep this app running!</p>
        <button class="btn" onclick="donate(3)">☕☕ Donate $3</button>
        <button class="btn" onclick="donate(5)">☕☕☕ Donate $5</button>
    `;
}

function donate(amount) {
    // Telegram Stars payment
    tg.showAlert(`Thank you! Payment of $${amount} initiated via Telegram Stars`);
}

// Show main button (optional)
tg.MainButton.text = "Close App";
tg.MainButton.show();
tg.MainButton.onClick(() => tg.close());
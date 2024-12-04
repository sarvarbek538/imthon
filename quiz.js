// Telegram Bot API Token va Chat ID
const botToken = '8191333519:AAH4-OKfEa9eVWr27iew2e6UTlGR13mm1sY';
const chatId = '6206221012'; // Botni yuboradigan chat ID

// Savollar
const questions = [
    "var, let, const orasidagi farq nima?",
    "typeof operatori qanday ishlaydi?",
    "== va === operatorlari orasidagi farq nima?",
    "JavaScriptda qanday turdagi ma'lumotlar mavjud?",
    "null va undefined orasidagi farq nima?",
    "forEach va map metodlari orasidagi farq nima?",
    "JavaScriptda funktsiyalarni qanday aniqlash mumkin?",
    "Hoisting nima va qanday ishlaydi?",
    "Arrow funktsiyalar va an'anaviy funktsiyalar orasidagi farq nima?",
    "Promises nima va qanday ishlaydi?",
    "Async va await qanday ishlaydi?",
    "Event bubbling va capturing nima?",
    "this kalit so'zi nima?",
    "DOM va BOM orasidagi farq nima?",
    "JavaScriptda sinxron va asinxron kodni qanday farqlash mumkin?",
    "setTimeout va setInterval orasidagi farq nima?",
    "JSON nima va uni qanday ishlatish mumkin?",
    "JavaScriptda object va array orasidagi farq nima?",
    "callback funksiyalar qanday ishlaydi?",
    "Closures nima?",
    "IIFE (Immediately Invoked Function Expression) nima?",
    "Destructuring nima va qanday ishlaydi?",
    "Spread operatori nima?",
    "Rest parameteri nima?",
    "Modules nima va qanday ishlatish mumkin?",
    "Event listeners qanday ishlaydi?",
    "Prototype chain nima?",
    "Errors bilan ishlash qanday amalga oshiriladi?",
    "Debouncing va Throttling nima?",
    "Module bundler nima?",
    "Memoization nima?"
];

// Dynamically generate 30 questions in the table
const tableBody = document.querySelector('tbody');
questions.forEach((question, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${question}</td>
        <td><input type="text" name="answer${index + 1}" required></td>
    `;
    tableBody.appendChild(row);
});

// Function to handle form submission
function submitQuiz() {
    const form = document.getElementById('quizForm');
    const answers = [];

    // Collect all answers
    for (let i = 1; i <= 30; i++) {
        const answer = form.querySelector(`input[name="answer${i}"]`).value;
        answers.push({
            question: i,
            answer: answer
        });
    }

    // Sending data to Telegram bot
    sendToTelegram(answers);

    // Alert the user after submitting
    alert("Imtihon tugadi! Natijalar Telegramga yuborildi.");
}

// Function to send answers to Telegram
function sendToTelegram(answers) {
    const message = answers.map(ans => `Savol ${ans.question}: ${ans.answer}`).join('\n');
    const telegramMessage = `
Imtihon natijalari:
${message}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Natijalar Telegramga yuborildi', data);
        })
        .catch(error => {
            console.error('Telegramga yuborishda xatolik yuz berdi', error);
        });
}
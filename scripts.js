function submitInfo() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;

    if (name && surname && phone) {
        // Show loading spinner
        document.getElementById('loadingSpinner').style.display = 'block';

        // Simulate delay before redirecting
        setTimeout(function() {
            window.location.href = 'quiz.html'; // Redirect to the quiz page
        }, 2000);
    } else {
        alert("Iltimos, barcha ma'lumotlarni to'ldiring!");
    }
}
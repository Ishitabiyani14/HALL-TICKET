function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate user authentication (check hardcoded credentials)
    if (username === 'admin' && password === 'password') {
        // Show exam form after successful login
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('examForm').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function createExam() {
    const examName = document.getElementById('examName').value;
    const examDate = document.getElementById('examDate').value;

    // Simulate exam creation and save to local storage
    const exam = {
        name: examName,
        date: examDate
    };

    const exams = JSON.parse(localStorage.getItem('exams')) || [];
    exams.push(exam);
    localStorage.setItem('exams', JSON.stringify(exams));

    alert('Exam created successfully!');
}

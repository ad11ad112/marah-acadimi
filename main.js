// قائمة الهاتف
const menuBtn = document.querySelector('.button');
const navBar = document.querySelector('.nav-bar');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

// Accordion للأسئلة
const questions = document.querySelectorAll('.question-content');

questions.forEach(q => {
    q.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== q) item.classList.remove('active');
        });
        q.classList.toggle('active');
    });
});

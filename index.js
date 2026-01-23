const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // To handle form data

const courses = [
    { title: "Noorani Qaida", desc: "Foundational reading for beginners." },
    { title: "Tajweed Mastery", desc: "Perfect your pronunciation and phonetics." },
];
window.addEventListener("load", () => {
    const loader = document.getElementById("loader-wrapper");
    
    // Add a slight delay so the transition looks smooth
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 500);
});
app.get('/', (req, res) => {
    res.render('index', { courses });
});

// Route to handle form submission
app.post('/contact', (req, res) => {
    const { name, phone, course } = req.body;
    console.log(`New Enrollment: ${name}, Phone: ${phone}, Course: ${course}`);
    // Here you would typically send an email or save to a database
    res.send("<h1>Success! We will contact you soon.</h1><a href='/'>Go Back</a>");
});

app.listen(PORT, () => console.log(`Site live at http://localhost:${PORT}`));
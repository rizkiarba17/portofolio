const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Style
function darkMode() {
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    textBox.style.backgroundColor = 'rgba(18,18,18,1)';
    textBox.style.color = 'rgba(255,255,255,0.8)';
    imageMode('dark');
}

// Dark Mode Style
function lightMode() {
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    textBox.style.backgroundColor = 'rgba(0,0,0,0.5)';
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }else {
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
        localStorage.setItem('theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change',switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}
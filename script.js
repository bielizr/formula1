// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.border = 'none';
toggleButton.style.backgroundColor = '#333';
toggleButton.style.color = 'white';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.innerText = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Interactive card hover effect (if desired)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("carousel-slide").length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("carousel-slide").length; }
    showSlidesManually();
}

function showSlidesManually() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        offset: 100,
        easing: 'ease-in-out',
        delay: 100,
        once: true,
        mirror: false
    });
    console.log("✅ AOS initialized.");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links"); 
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active"); 
            navLinks.classList.toggle("active"); 
        });
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
        
        console.log("✅ Hamburger menu functionality loaded.");
    } else {
         console.error("❌ ERROR: Hamburger or NavLinks element not found! Check HTML IDs/Classes.");
    }
});

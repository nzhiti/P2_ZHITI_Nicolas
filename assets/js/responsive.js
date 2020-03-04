const windowWidth = window.matchMedia("(max-width: 992px)");
function dropdownContact() {
    const contactDiv = document.getElementById('contactDiv');
    if (windowWidth.matches) {
        if (contactDiv.style.display === "flex") {
            contactDiv.style.display = "none";
        } else {
            contactDiv.style.display = "flex";
        }
    }
}

function dropdownAbout() {
    const aboutDiv = document.getElementById('aboutDiv');
    if (windowWidth.matches) {
        if (aboutDiv.style.display === "flex") {
            aboutDiv.style.display = "none";
        } else {
            aboutDiv.style.display = "flex";
        }
    }
}

function dropdownLoisirs() {
    const loisirsDiv = document.getElementById('loisirsDiv');
    if (windowWidth.matches) {
        if (loisirsDiv.style.display === "flex") {
            loisirsDiv.style.display = "none";
        } else {
            loisirsDiv.style.display = "flex";
        }
    }
}
const windowWidth = window.matchMedia("(max-width: 992px)");


window.addEventListener("resize", showDivs);

function dropdownContact() {
    const contactDiv = document.getElementById('contactDiv');
    const contactDivCaretUp = document.getElementById('caretUpContact');
    const contactDivCaretDown = document.getElementById('caretDownContact');
    if (windowWidth.matches) {
        if (contactDiv.style.display === "flex") {
            contactDiv.style.display = "none";
            contactDivCaretDown.style.display = "block";
            contactDivCaretUp.style.display = "none";
        } else {
            contactDiv.style.display = "flex";
            contactDivCaretDown.style.display = "none";
            contactDivCaretUp.style.display = "block";
        }
    }
}

function dropdownAbout() {
    const aboutDiv = document.getElementById('aboutDiv');
    const aboutDivCaretUp = document.getElementById('caretUpAbout');
    const aboutDivCaretDown = document.getElementById('caretDownAbout');
    if (windowWidth.matches) {
        if (aboutDiv.style.display === "flex") {
            aboutDiv.style.display = "none";
            aboutDivCaretDown.style.display = "block";
            aboutDivCaretUp.style.display = "none";
        } else {
            aboutDiv.style.display = "flex";
            aboutDivCaretDown.style.display = "none";
            aboutDivCaretUp.style.display = "block";
        }
    }
}

function dropdownLoisirs() {
    const loisirsDiv = document.getElementById('loisirsDiv');
    const loisirsDivCaretUp = document.getElementById('caretUpLoisirs');
    const loisirsDivCaretDown = document.getElementById('caretDownLoisirs');
    if (windowWidth.matches) {
        if (loisirsDiv.style.display === "flex") {
            loisirsDiv.style.display = "none";
            loisirsDivCaretDown.style.display = "block";
            loisirsDivCaretUp.style.display = "none";
        } else {
            loisirsDiv.style.display = "flex";
            loisirsDivCaretDown.style.display = "none";
            loisirsDivCaretUp.style.display = "block";
        }
    }
}

function showDivs() {
    const contactDiv = document.getElementById('contactDiv');
    const aboutDiv = document.getElementById('aboutDiv');
    const loisirsDiv = document.getElementById('loisirsDiv');
    if (contactDiv.style.display === "none") {
        contactDiv.style.display = "flex";
    }
    if (aboutDiv.style.display === "none") {
        aboutDiv.style.display = "flex";
    }
    if (loisirsDiv.style.display === "none") {
        loisirsDiv.style.display = "flex";
    }

    if (window.matchMedia("(min-width: 993px)").matches) {
        const loisirsDivCaretUp = document.getElementById('caretUpLoisirs');
        const loisirsDivCaretDown = document.getElementById('caretDownLoisirs');
        const aboutDivCaretUp = document.getElementById('caretUpAbout');
        const aboutDivCaretDown = document.getElementById('caretDownAbout');
        const contactDivCaretUp = document.getElementById('caretUpContact');
        const contactDivCaretDown = document.getElementById('caretDownContact');

        loisirsDivCaretUp.style.display = "none";
        loisirsDivCaretDown.style.display = "none";
        aboutDivCaretUp.style.display = "none";
        aboutDivCaretDown.style.display = "none";
        contactDivCaretUp.style.display = "none";
        contactDivCaretDown.style.display = "none";
    }
}

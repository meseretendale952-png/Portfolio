// 🌐 Top navbar tab switching (Home, About, Education, Skills, Projects, Contact)
function openTab(evt, tabName) {
    if (evt) evt.preventDefault();

    var contents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    var links = document.getElementsByClassName("nav-btn");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active-link");
    }

    document.getElementById(tabName).classList.add("active");

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("onclick") && links[i].getAttribute("onclick").includes("'" + tabName + "'")) {
            links[i].classList.add("active-link");
        }
    }

    window.scrollTo(0, 0);
}

// 🪟 Project Preview Modal
function openModal(url) {
    document.getElementById('modalFrame').src = url;
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.getElementById('modalFrame').src = '';
    document.body.style.overflow = 'auto';
}

function closeModalOutside(event) {
    if (event.target.id === 'projectModal') {
        closeModal();
    }
}

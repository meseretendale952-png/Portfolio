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

// 💻 Projects ገጽ ውስጥ ያሉትን ንዑስ ቁልፎች (Job Board / Symptom Checker / Calculator) መቀያየሪያ
function selectProjectTab(evt, paneId) {
    if (evt) evt.preventDefault();

    // ፓኔሎቹን (project-pane) መቀያየር
    var panes = document.getElementsByClassName('project-pane');
    for (var i = 0; i < panes.length; i++) {
        panes[i].classList.remove('active-pane');
    }
    document.getElementById(paneId).classList.add('active-pane');

    // ንዑስ ቁልፎቹ ላይ ያለውን active-sub ማዘመን
    var subButtons = document.querySelectorAll('.project-sub-tabs .btn');
    for (var i = 0; i < subButtons.length; i++) {
        subButtons[i].classList.remove('active-sub');
    }
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active-sub');
    }

    window.scrollTo(0, 0);
}

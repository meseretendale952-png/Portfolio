// 🌐 Top navbar (Home, About, Education, Contact) tab switching
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

    // Home/About/Education/Contact ወደ ተጫነ ሲባል sidebar highlight ማጥፋት
    clearSidebarActive();

    window.scrollTo(0, 0);
}

// 📚 Skills sidebar link
function selectSkills(evt) {
    if (evt) evt.preventDefault();
    openTab(null, 'skills');

    clearSidebarActive();
    document.getElementById('sidebar-skills-link').classList.add('active');
}

// 💻 Projects sidebar links (main + sub items)
function selectProject(evt, paneId) {
    if (evt) evt.preventDefault();
    openTab(null, 'projects');

    var panes = document.getElementsByClassName('project-pane');
    for (var i = 0; i < panes.length; i++) {
        panes[i].classList.remove('active-pane');
    }
    document.getElementById(paneId).classList.add('active-pane');

    clearSidebarActive();
    document.getElementById('sidebar-projects-link').classList.add('active');

    var subs = document.getElementsByClassName('sidebar-sublink');
    for (var i = 0; i < subs.length; i++) {
        if (subs[i].getAttribute("onclick") && subs[i].getAttribute("onclick").includes("'" + paneId + "'")) {
            subs[i].classList.add('active');
        }
    }

    window.scrollTo(0, 0);
}

function clearSidebarActive() {
    var mains = document.getElementsByClassName('sidebar-link');
    for (var i = 0; i < mains.length; i++) {
        mains[i].classList.remove('active');
    }
    var subs = document.getElementsByClassName('sidebar-sublink');
    for (var i = 0; i < subs.length; i++) {
        subs[i].classList.remove('active');
    }
}

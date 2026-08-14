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

    clearSidebarActive();
    window.scrollTo(0, 0);
}

function selectSkills(evt) {
    if (evt) evt.preventDefault();
    openTab(null, 'skills');

    clearSidebarActive();
    document.getElementById('sidebar-skills-link').classList.add('active');

    document.getElementById('sidebar-sublist').classList.remove('expanded');
    document.getElementById('projects-arrow').classList.remove('rotated');
}

function toggleProjectsMenu(evt) {
    if (evt) evt.preventDefault();

    var sublist = document.getElementById('sidebar-sublist');
    var arrow = document.getElementById('projects-arrow');

    sublist.classList.toggle('expanded');
    arrow.classList.toggle('rotated');

    clearSidebarActive();
    document.getElementById('sidebar-projects-link').classList.add('active');
}

function selectProject(evt, paneId) {
    if (evt) evt.preventDefault();
    openTab(null, 'projects');

    var panes = document.getElementsByClassName('project-pane');
    for (var i = 0; i < panes.length; i++) {
        panes[i].classList.remove('active-pane');
    }
    document.getElementById(paneId).classList.add('active-pane');

    // Projects ሲጫን ንዑስ ዝርዝሩ እንዲከፈት እና አሮው (arrow) እንዲዞር ማድረግ
    var sublist = document.getElementById('sidebar-sublist');
    var arrow = document.getElementById('projects-arrow');
    sublist.classList.add('expanded');
    arrow.classList.add('rotated');

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

// --- 1. Tab Switching Functionality ---
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
        if (links[i].getAttribute("onclick").includes("'" + tabName + "'")) {
            links[i].classList.add("active-link");
        }
    }
}

// --- 2. Project Sidebar Switching Functionality ---
function showProject(evt, projectId) {
    if (evt) evt.preventDefault();

    // Hide all project panes
    var panes = document.getElementsByClassName("project-pane");
    for (var i = 0; i < panes.length; i++) {
        panes[i].classList.remove("active-pane");
    }

    // Remove active class from all sidebar buttons
    var buttons = document.getElementsByClassName("side-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Show selected project pane
    document.getElementById(projectId).classList.add("active-pane");

    // Highlight clicked button
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
}

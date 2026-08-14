function openTab(evt, tabName) {
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
        tabContents[i].classList.remove("active-project");
    }

    let navBtns = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].classList.remove("active-link");
    }

    document.getElementById(tabName).classList.add("active");
    if (evt) evt.currentTarget.classList.add("active-link");
}

function openProjectTab(evt, projId) {
    // Hide all tab contents
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
        tabContents[i].classList.remove("active-project");
    }

    // Deactivate all sub project buttons
    let subBtns = document.getElementsByClassName("sub-side-btn");
    for (let i = 0; i < subBtns.length; i++) {
        subBtns[i].classList.remove("active-sub");
    }

    // Show current project
    document.getElementById(projId).classList.add("active-project");
    if (evt) evt.currentTarget.classList.add("active-sub");
}

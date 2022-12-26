let page = 0;

window.addEventListener("keydown", (e) => {
    if (e.key == "Up" || e.key == "ArrowUp") moveDown();
    if (e.key == "Down" || e.key == "ArrowDown") moveUp();
});

async function moveUp() {
    //if (page == 0) window.location.replace("file:///D:/Мишины%20презентации/Как%20создаются%203D-модели/index.html");
    page = page + 1;
    window.location.replace("#page"+page.toString());
    if (page == 2) window.location.replace("page2.html");
}
async function moveDown() {
    if (page == 0) window.location.replace("index.html");
    page = page - 1;
    window.location.replace("#page"+page.toString());
    if (page == 2) window.location.replace("page2.html");
}

async function onClick() {
    let imgs = document.getElementById("images");
    if (getComputedStyle(imgs).visibility == "hidden") imgs.style.visibility = "visible";
    else if (getComputedStyle(imgs).visibility == "visible") imgs.style.visibility = "hidden";
}
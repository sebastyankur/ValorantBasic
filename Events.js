function Show(Version) {
    let item = document.getElementsByClassName("PN_Content")[Version];
    let base = document.getElementsByClassName("Show")[Version];
    if (item.style.display == "none") {
        item.style.display = "block";
        base.style.backgroundColor = "#2525FF";
    } else {
        item.style.display = "none";
        base.style.backgroundColor = "#000000";
    }
}

function contentChange(Version) {
    let imageContent = document.getElementsByClassName("arsenalItem")[Version];
    let textContent = document.getElementsByClassName("arsenalContent")[Version];
    if (imageContent.style.display == "none") {
        imageContent.style.display = "block";
        textContent.style.display = "none";
    } else {
        textContent.style.display = "block";
        imageContent.style.display = "none";
    }
}


window.addEventListener('scroll', function() {
    if (window.location.pathname == "/Agent_Tips.html") {
        changeButton("Duelist", "Duelist", "Sentinel");
        changeButton("Duelist", "Sentinel", "Controller");
        changeButton("Sentinel", "Controller", "Initiator");
        changeButton("Controller", "Initiator", "Initiator");    
    }
})

function changeButton(before, now, after) {
        const a = document.querySelector(`#${before}`).getBoundingClientRect();
        const b = document.querySelector(`#${now}`).getBoundingClientRect();
        const c = document.querySelector(`#${after}`).getBoundingClientRect();
        const d = document.querySelector("#prev");
        const e = document.querySelector("#next");
        if ((b.top < 250 && c.top > 450) || (a.top < 250 && b.top < 250)) {
            d.innerHTML = `<a href="#${before}">${before}</a>`;
            e.innerHTML = `<a href="#${after}">${after}</a>`;
        }
}

window.addEventListener('click', function() {
    if (window.location.pathname == "/Agent_Tips.html") {
        const base = document.querySelector(".move");
        console.log(base.style.display);
        if (base.style.display == "none") {base.style.display = "flex";} else {base.style.display = "none";}
    } 
})

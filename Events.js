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
var change = true;
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

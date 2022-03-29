function Show(Version) {
    var item = document.getElementsByClassName("PN_Content")[Version];
    if (item.style.display == "none") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}
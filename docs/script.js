function startPicking() {
    let pc = document.getElementById("pickedColor").value;
    let pcv = document.getElementById("pcv");
    pcv.innerHTML = pc;
}

function loadImgPC() {
    let cIMG = document.getElementById("cImgPC").value;
    sIMG = document.getElementById("sImgPC").src = cIMG;
}

function loadImgWEB() {
    let cIMG = document.getElementById("cImgWEB").value;
    sIMG = document.getElementById("sImgWEB").src = cIMG;
}

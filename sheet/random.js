function Roll20() {
    var result = Math.random() * (20 - 1) + 1;
    result = Math.round(result);
    document.getElementById("dados").style.opacity = 1;
    document.getElementById("resultnumber").innerHTML = result.toString();
    setTimeout(() => {
        document.getElementById("dados").style.opacity = 0;
    }, 4000);

}
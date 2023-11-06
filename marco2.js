function cambiarColorFondo() {
    let iframe1 = parent.document.getElementById("marco1");
    let iframe2 = parent.document.getElementById("marco2");
    let color = iframe1.contentDocument.getElementById("color").value;
    let marco = iframe1.contentDocument.getElementById("marcos").value;

    if (marco === "0") {
        iframe1.contentDocument.body.style.backgroundColor = color;
        iframe2.contentDocument.body.style.backgroundColor = 'transparent';
    } else {
        iframe1.contentDocument.body.style.backgroundColor = 'transparent';
        iframe2.contentDocument.body.style.backgroundColor = color;
    }
}

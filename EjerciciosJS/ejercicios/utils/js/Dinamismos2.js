function updateColor() {
    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;

    let colorDisplay = document.getElementById('colorDisplay');
    let rgbValue = `RGB : ${red} / ${green} / ${blue}`;

    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorDisplay.textContent = rgbValue;
}

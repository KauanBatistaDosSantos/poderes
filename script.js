const colors = document.querySelectorAll('.color');
const colorDisplay = document.querySelectorAll('.color');
const powerName = document.getElementById('power-name');
const powerDescription = document.getElementById('power-description');
const powerGif = document.getElementById('power-gif');
const powerMessage = document.getElementById('power-message');

let selectedColors = [];

colors.forEach(color => {
    color.addEventListener('click', () => {
        if (selectedColors.length < 2) {
            selectedColors.push(color.style.backgroundColor);
            updateColorDisplay();
            color.classList.add('selected');
            if (selectedColors.length === 2) {
                showPowerInfo();
        }
        
        } else {
            selectedColors = [];
            colors.forEach(color => color.classList.remove('selected'));
            updateColorDisplay();
            hidePowerInfo();
        }
    });
});

function updateColorDisplay() {
    color1.style.backgroundColor = selectedColors[0] || 'transparent';
    color2.style.backgroundColor = selectedColors[1] || 'transparent';
}

function calculatePower(color1, color2) {
    let power = {};
    if ((color1 === 'yellow' && color2 === 'red') || (color1 === 'red' && color2 === 'yellow')) {
        power.name = 'Controle de Água';
        power.description = 'O poder de manipular e controlar a água em todas as suas formas.';
        power.gif = 'water.gif';
    } else if ((color1 === 'grey' && color2 === 'white') || (color1 === 'white' && color2 === 'grey')) {
        power.name = 'Velocidade ou Vidência';
        power.description = 'O poder de manipular e controlar a terra, incluindo rochas, solo e minerais.';
        power.gif = 'velocista.png ';
    } else if ((color1 === 'brown' && color2 === 'blue') || (color1 === 'blue' && color2 === 'brown')) {
        power.name = 'Controle de Fogo';
        power.description = 'O poder de manipular e controlar o fogo, incluindo chamas e calor intenso.';
        power.gif = 'fire.gif';
    } else if ((color1 === 'beige' && color2 === 'green') || (color1 === 'green' && color2 === 'beige')) {
        power.name = 'Controle de Ar';
        power.description = 'O poder de manipular e controlar o ar, incluindo vento e atmosfera.';
        power.gif = 'air.gif';
    } else if ((color1 === 'white' && color2 === 'purple') || (color1 === 'purple' && color2 === 'white')) {
        power.name = 'Controle de Terra';
        power.description = 'O poder de manipular e controlar a terra, incluindo rochas, solo e minerais.';
        power.gif = 'earth.gif';
    } else if ((color1 === 'grey' && color2 === 'orange') || (color1 === 'orange' && color2 === 'grey')) {
        power.name = 'Transmutação';
        power.description = 'O poder de manipular e controlar a terra, incluindo rochas, solo e minerais.';
        power.gif = 'transmutação.gif';
    } else {
        power.name = 'Combinação sem poder';
        power.description = 'Essas cores não geram nenhum poder especial.';
        power.gif = '';
    }
    return power;
}

function showPowerInfo() {
    powerMessage.textContent = '';
    let power = calculatePower(selectedColors[0], selectedColors[1]);
    powerName.textContent = `Poder resultante: ${power.name}`;
    powerDescription.textContent = power.description;
    powerGif.src = power.gif;
}

function hidePowerInfo() {
    powerMessage.textContent = 'Selecione duas cores';
    powerName.textContent = '';
    powerDescription.textContent = '';
    powerGif.src = 'placeholder.gif';
}
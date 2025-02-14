alert("¡Bienvenido a mi página web!");

// ocultar info de imagen
document.getElementById('myImage').addEventListener('click', function() {
    var info = document.getElementById('info');
    if (info.classList.contains('hidden')) {
        info.classList.remove('hidden');
    } else {
        info.classList.add('hidden');
    }
});

document.getElementById('esfera').addEventListener('click', function() {
    document.getElementById('info').innerText = 'Has seleccionado la Esfera.';
    document.getElementById('audio').style.display = 'block';
    document.getElementById('audio').play();
});

document.getElementById('foco').addEventListener('click', function() {
    document.getElementById('info').innerText = 'Has seleccionado el Foco.';
    document.getElementById('audio').style.display = 'block';
    document.getElementById('audio').play();
});
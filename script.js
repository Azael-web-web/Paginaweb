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
// Script para manejar el login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe automáticamente
    
    // Credenciales correctas
    const validUsername = "Farmacia";
    const validPassword = "Paracetamol";
    
    // Obtenemos los valores ingresados
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Verificamos si las credenciales son correctas
    if (username === validUsername && password === validPassword) {
        // Guardamos la sesión en localStorage
        localStorage.setItem('loggedIn', true);
        // Redirigir a la página de bienvenida o cualquier otra sección
        window.location.href = "bienvenido.html";
    } else {
        // Mostrar mensaje de error
        document.getElementById("error-message").style.display = "block";
    }
});

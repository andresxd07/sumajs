document.addEventListener("DOMContentLoaded", function () {
    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    const sumar = document.getElementById("sumar");
    const resultado = document.getElementById("resultado");

    sumar.addEventListener("click", function () {
        const valor1 = parseFloat(numero1.value);
        const valor2 = parseFloat(numero2.value);

        if (valor1 && valor2) {
            const suma = valor1 + valor2;
            resultado.textContent = `Resultado: ${suma}`;
        } else {
            resultado.textContent = "Por favor, ingrese números válidos.";
        }
    });
});

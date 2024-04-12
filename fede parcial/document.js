document.addEventListener("DOMContentLoaded", function() {
    const desdeInput = document.getElementById("desde");
    const hastaInput = document.getElementById("hasta");
    const totalInput = document.getElementById("total");

    // Función para calcular el total
    function calcularTotal() {
        const desde = new Date(desdeInput.value);
        const hasta = new Date(hastaInput.value);
        const diffTime = Math.abs(hasta - desde);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        const total = diffDays * 10000;
        totalInput.value = total;
    }

    // Event listener para calcular el total cuando cambian las fechas
    desdeInput.addEventListener("change", calcularTotal);
    hastaInput.addEventListener("change", calcularTotal);
});

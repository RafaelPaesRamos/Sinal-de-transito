document.addEventListener('DOMContentLoaded', () => {
    const lights = document.querySelectorAll('.light');
    let currentLightIndex = 0;

    function changeLight() {
        lights.forEach(light => light.classList.remove('active'));

        currentLightIndex = (currentLightIndex + 1) % lights.length;
        lights[currentLightIndex].classList.add('active');
    }

    setInterval(changeLight, 2000); // Troca a cada 2 segundos
});

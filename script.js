// Botão "Comece a Composto Agora!"
const ctaButton = document.getElementById('ctaButton');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Incrível! Sua jornada na compostagem começou! Explore nosso guia para os próximos passos. 🌱');
    });
}


// Lógica para os dropdowns de navegação
document.querySelectorAll('.nav-item').forEach(item => {
    const dropdownContent = item.querySelector('.dropdown-content');
    if (dropdownContent) {
        item.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique feche imediatamente
            // Fecha outros dropdowns abertos antes de abrir o atual
            document.querySelectorAll('.dropdown-content').forEach(otherDropdown => {
                if (otherDropdown !== dropdownContent) {
                    otherDropdown.style.display = 'none';
                }
            });
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }
});

// Fecha todos os dropdowns quando clica fora deles
window.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        if (!event.target.closest('.nav-item') && dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    });
});

// Mensagem quando a página carrega
window.onload = function() {
    console.log("Plataforma de Compostagem Integrada carregada! Vamos compostar!");
};

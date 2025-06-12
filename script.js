// Obtém referências aos elementos HTML
        const actionButton = document.getElementById('actionButton');
        const mainText = document.getElementById('mainText');
        const dynamicImage = document.getElementById('dynamicImage');
        const messageBox = document.getElementById('messageBox');
        const myModal = document.getElementById('myModal');
        const modalMessage = document.getElementById('modalMessage');
        const closeModalButton = document.getElementById('closeModalButton');

        // Array de URLs de imagens de placeholder para alternar
        const imageUrls = [
            'https://placehold.co/400x250/81C784/FFFFFF?text=Natureza',
            'https://placehold.co/400x250/FFD54F/FFFFFF?text=Tecnologia',
            'https://placehold.co/400x250/64B5F6/FFFFFF?text=Abstrato',
            'https://placehold.co/400x250/FF8A65/FFFFFF?text=Cidade',
            'https://placehold.co/400x250/BA68C8/FFFFFF?text=Espaço'
        ];

        let imageIndex = 0; // Índice da imagem atual no array
        let clickCount = 0; // Contador para controlar as interações

        /**
         * Exibe uma mensagem em um modal personalizado.
         * @param {string} message - A mensagem a ser exibida.
         */
        function showMessageModal(message) {
            modalMessage.textContent = message;
            myModal.style.display = 'flex'; // Exibe o modal
        }

        // Adiciona um listener de evento para o clique do botão
        actionButton.addEventListener('click', () => {
            clickCount++; // Incrementa o contador de cliques

            // Troca a imagem
            dynamicImage.src = imageUrls[imageIndex];
            imageIndex = (imageIndex + 1) % imageUrls.length; // Avança para a próxima imagem, voltando ao início se chegar ao fim

            // Lógica para alterar o texto principal e a caixa de mensagem com base nos cliques
            if (clickCount === 1) {
                mainText.textContent = 'Que legal! A primeira imagem apareceu.';
                messageBox.classList.remove('hidden'); // Mostra a caixa de mensagem
                messageBox.textContent = 'Imagem inicial carregada! 🎉';
                messageBox.classList.remove('bg-blue-100', 'text-blue-800', 'border-blue-300');
                messageBox.classList.add('bg-green-100', 'text-green-800', 'border-green-300');
            } else if (clickCount === 2) {
                mainText.textContent = 'Nova imagem! As possibilidades são infinitas.';
                messageBox.textContent = 'Segunda imagem exibida! 🚀';
                messageBox.classList.remove('bg-green-100', 'text-green-800', 'border-green-300');
                messageBox.classList.add('bg-yellow-100', 'text-yellow-800', 'border-yellow-300');
            } else if (clickCount === 3) {
                mainText.textContent = 'Mais uma imagem para você! Continuamos interagindo.';
                messageBox.textContent = 'Terceira imagem! O que achou? ✨';
                messageBox.classList.remove('bg-yellow-100', 'text-yellow-800', 'border-yellow-300');
                messageBox.classList.add('bg-purple-100', 'text-purple-800', 'border-purple-300');
            } else {
                // Após o terceiro clique, exibe uma mensagem no modal
                showMessageModal(`Você clicou ${clickCount} vezes e viu muitas imagens!`);
                mainText.textContent = 'Continue clicando para alternar as imagens!';
                messageBox.textContent = `Imagens alternadas ${clickCount} vezes.`;
                messageBox.classList.remove('bg-purple-100', 'text-purple-800', 'border-purple-300');
                messageBox.classList.add('bg-blue-100', 'text-blue-800', 'border-blue-300');
            }
        });

        // Adiciona um listener para fechar o modal quando o botão 'x' é clicado
        closeModalButton.addEventListener('click', () => {
            myModal.style.display = 'none'; // Esconde o modal
        });

        // Adiciona um listener para fechar o modal se o usuário clicar fora da caixa de conteúdo
        window.addEventListener('click', (event) => {
            if (event.target === myModal) {
                myModal.style.display = 'none'; // Esconde o modal
            }
        });

        // Evento para garantir que a animação comece após o carregamento da janela, se aplicável
        window.onload = function() {
            console.log("Página carregada e script pronto!");
        };

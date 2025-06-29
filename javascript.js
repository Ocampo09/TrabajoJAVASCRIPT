document.addEventListener('DOMContentLoaded', () => {
    /************ Menu Hamburguesa ************/
    const btnMenu = document.querySelector('.btn-menu');
    const barIconX = document.querySelector('.btn-menu i');
    const menu = document.querySelector('.listaContent');
    let activador = true;

    btnMenu.addEventListener('click', () => {
        barIconX.classList.toggle('fa-times');
        if (activador) {
            menu.style.right = '0%';
            menu.style.transition = '0.5s';
            activador = false;
        } else {
            menu.style.right = '-100%';
            menu.style.transition = '0.5s';
            activador = true;
        }
    });

    /************ Formulario ************/
    const reservaForm = document.getElementById("reservaForm");
    if (reservaForm) {
        reservaForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevenir el envío del formulario

            // Mostrar mensaje de agradecimiento
            const mensaje = document.getElementById("mensaje");
            if (mensaje) {
                mensaje.classList.remove("mensaje-oculto");
            }

            // Limpiar el formulario
            reservaForm.reset();
        });
    }

    /************* Galería *************/
    let currentIndex = 0;
    const images = document.querySelectorAll('.gallery-image');
    const totalImages = 3;
    const galleryImagesContainer = document.querySelector('.gallery-images');

    if (galleryImagesContainer) {
        document.querySelector('.next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateGallery();
        });

        document.querySelector('.prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateGallery();
        });

        function updateGallery() {
            const offset = -currentIndex * 120;
            galleryImagesContainer.style.transform = `translateX(${offset}%)`;
        }

        const modal = document.querySelector('.modal');
        const modalImg = document.getElementById('modal-image');

        images.forEach(img => {
            img.addEventListener('click', () => {
                if (modal && modalImg) {
                    modal.style.display = 'block';
                    modalImg.src = img.src;
                }
            });
        });

        document.querySelector('.close').addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }
});

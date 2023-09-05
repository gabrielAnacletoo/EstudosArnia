document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const modal = document.querySelector(".modal-content");
    const overlay = document.getElementById("overlay");

    // Função para abrir o modal
    function openModal() {
        modal.style.display = "block";
        overlay.style.display = "block";
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch("../service/process_create.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                modal.innerHTML = "<p>" + data.message + "</p>";
            } else {
                modal.innerHTML = "<p>Erro ao adicionar registro.</p>";
            }
        })
        .catch(error => {
            modal.innerHTML = "<p>Erro ao comunicar com o servidor.</p>";
        });
    });

    // Adicione os listeners para abrir e fechar o modal
    const openButton = document.querySelector(".button");
    const closeButton = document.querySelector(".modal-close");

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
});

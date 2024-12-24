document.addEventListener("DOMContentLoaded", function () {
    // Create the modal structure
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.zIndex = "1000";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.transition = "opacity 0.3s ease";

    const modalImage = document.createElement("img");
    modalImage.style.maxWidth = "90%";
    modalImage.style.maxHeight = "90%";
    modalImage.style.border = "5px solid white";
    modalImage.style.borderRadius = "10px";
    modalImage.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.5)";
    modalImage.alt = "Enlarged Image";

    const closeButton = document.createElement("span");
    closeButton.textContent = "✖";
    closeButton.style.position = "absolute";
    closeButton.style.top = "20px";
    closeButton.style.right = "30px";
    closeButton.style.color = "white";
    closeButton.style.fontSize = "30px";
    closeButton.style.cursor = "pointer";
    closeButton.style.transition = "transform 0.2s ease";

    closeButton.addEventListener("mouseover", function () {
        closeButton.style.transform = "scale(1.2)";
    });

    closeButton.addEventListener("mouseout", function () {
        closeButton.style.transform = "scale(1)";
    });

    // Append elements to modal
    modal.appendChild(modalImage);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    // Event listener for image click
    document.querySelectorAll(".image-gallery img").forEach((image) => {
        image.addEventListener("click", function () {
            modalImage.src = this.src;
            modal.style.display = "flex";
            modal.style.opacity = "1";
            closeButton.focus(); // Trap focus on close button
        });
    });

    // Event listener for closing modal
    closeButton.addEventListener("click", function () {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); // Match the transition duration
    });

    modal.addEventListener("click", function (e) {
        if (e.target !== modalImage) {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });

    // Keyboard accessibility for modal
    document.addEventListener("keydown", function (e) {
        if (modal.style.display === "flex" && e.key === "Escape") {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");

    // Add a click event listener
    ctaButton.addEventListener("click", () => {
        console.log("CTA Button Clicked! Redirecting to Digital Brand Matrix...");
        // Optional: Track the click event with analytics here
    });
});

    function toggleAccordion(header) {
        let allHeaders = document.querySelectorAll('.accordion-header');
        let content = header.nextElementSibling;
        let icon = header.querySelector('.icon');
        let isAlreadyOpen = content.style.display === "block";

        document.querySelectorAll('.accordion-content').forEach((item) => {
            item.style.display = "none";
        });
        document.querySelectorAll('.accordion-header .icon').forEach((icn) => {
            icn.textContent = "+";
        });

        if (!isAlreadyOpen) {
            content.style.display = "block";
            icon.textContent = "-";
        }
    }
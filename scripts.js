// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(`#${tab.dataset.tab}`);

            // Remove current class from all tabs and contents
            tabs.forEach(t => t.classList.remove("current"));
            contents.forEach(c => c.classList.remove("current"));

            // Add current class to clicked tab and corresponding content
            tab.classList.add("current");
            target.classList.add("current");
        });
    });
});

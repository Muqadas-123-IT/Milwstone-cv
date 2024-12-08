document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills-section");
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener("click", function () {
            var currentDisplay = getComputedStyle(skillsSection).display;
            if (currentDisplay === "none") {
                skillsSection.style.display = "block";
                toggleButton.textContent = "Hide Skills";
            }
            else {
                skillsSection.style.display = "none";
                toggleButton.textContent = "Show Skills";
            }
        });
    }
    else {
        console.error("Toggle button or skills section not found in HTML.");
    }
});

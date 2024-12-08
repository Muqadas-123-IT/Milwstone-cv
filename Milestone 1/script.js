var _a;
// TypeScript Code to toggle the skills section visibility
(_a = document.getElementById("toggle-skills")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
        if (skillsSection.style.display == "none" || skillsSection.style.display == "") {
            skillsSection.style.display = "block"; // Show krna hy skills section
        }
        else {
            skillsSection.style.display = "none"; // Hide krna hy skills section
        }
    }
});

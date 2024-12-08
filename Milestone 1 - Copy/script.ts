// TypeScript Code to toggle the skills section visibility
document.getElementById("toggle-skills")?.addEventListener("click", () => {
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
       
        if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
            skillsSection.style.display = "block"; // Show the skills section
        } else {
            skillsSection.style.display = "none"; // Hide the skills section
        }
    }
});

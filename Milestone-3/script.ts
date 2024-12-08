const form = document.getElementById("resume-form") as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement | null;

// Check if both form and display element exist
if (form && resumeDisplayElement) {
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        // Collect input values
        const name = (document.getElementById("Name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Create resume content dynamically
        const resumeHTML = `
            <h2><b>Resume</b></h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <h3><b>Education</b></h3>
            <p>${education}</p>

            <h3><b>Experience</b></h3>
            <p>${experience}</p>

            <h3><b>Skills</b></h3>
            <p>${skills}</p>
        `;

        // Display the resume content
        resumeDisplayElement.innerHTML = resumeHTML;
    });
} else {
    console.error("Form or resume display element not found");
}

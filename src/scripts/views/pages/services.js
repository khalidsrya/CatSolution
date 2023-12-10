import { services } from "../templates/template-creator";
import emailjs from "emailjs-com";

const updateInputValidation = (element) => {
  const inputValue = element.value;

  if (element.id === "email") {
    const emailValidationMessage = document.getElementById(
      "email-validation-message"
    );

    if (inputValue.trim() === "") {
      emailValidationMessage.textContent = "Email harus diisi";
    } else if (!inputValue.includes("@")) {
      emailValidationMessage.textContent =
        'Email harus mengandung karakter "@"';
    } else {
      emailValidationMessage.textContent = ""; // Hapus pesan validasi jika email valid
    }
  } else if (element.id === "name") {
    const nameValidationMessage = document.getElementById(
      "name-validation-message"
    );

    if (inputValue.trim() === "") {
      nameValidationMessage.textContent = "Nama harus diisi";
    } else {
      nameValidationMessage.textContent = ""; // Hapus pesan validasi jika nama valid
    }
  } else if (element.id === "message") {
    const messageValidationMessage = document.getElementById(
      "message-validation-message"
    );

    if (inputValue.trim() === "") {
      messageValidationMessage.textContent = "Pesan harus diisi";
    } else {
      messageValidationMessage.textContent = ""; // Hapus pesan validasi jika pesan valid
    }
  }
};

const Service = {
  async render() {
    return services;
  },

  async afterRender() {
    const submitButton = document.getElementById("submit-button");

    if (submitButton) {
      submitButton.addEventListener("click", async () => {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        updateInputValidation(nameInput);
        updateInputValidation(emailInput);
        updateInputValidation(messageInput);

        const nameValidationMessage = document.getElementById(
          "name-validation-message"
        );
        const emailValidationMessage = document.getElementById(
          "email-validation-message"
        );
        const messageValidationMessage = document.getElementById(
          "message-validation-message"
        );

        if (
          nameValidationMessage.textContent ||
          emailValidationMessage.textContent ||
          messageValidationMessage.textContent
        ) {
          return;
        }

        await this.sendEmail();
      });
    }
  },

  async sendEmail() {
    emailjs.init("pPy0tqtutnHe45UNw");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validasi semua field harus diisi
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    const serviceID = "service_ke34k9k";
    const templateID = "template_25jrm9i";

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams
      );

      if (response && response.status === 200) {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
      } else {
        console.error("Failed to send email. Response:", response);
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Email send failed. Please try again later.");
    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  },
};

export default Service;

function copyEmail(event, element) {
    event.preventDefault();

    navigator.clipboard.writeText("castaluismi@gmail.com")
        .then(() => {
            const text = element.querySelector("span");

            text.textContent = "Copied!";

            setTimeout(() => {
                text.textContent = "Email";
            }, 2000);
        });
}
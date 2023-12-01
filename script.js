const form = document.querySelector('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = 'Full Name: ${name.value}<br> Email: ${email.value}<br> Message: ${message.value}';
    
    
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "codewith02@gmail.com",
        Password: "1A6E0FFFF8079B27F570B56D8FD1CEAD7A31",
        To: "codewith02@gmail.com",
        From: "codewith02@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
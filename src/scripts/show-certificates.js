
const certificateWindow = document.querySelector('.certificate-window');

const ccBox = document.querySelector('.cc-box');
const rcBox = document.querySelector('.rc-box');

const nameOfCCertificates = ["", 
"HTML", 
"CSS", 
"JavaScript", 
"Node.js", 
"Responsive Design", 
"Intermediare CSS", 
"Intermediare JavaScript", 
"Asynchronous JavaScript", 
"Navigation Design", 
"How to Debug JavaScript Errors", 
"Command Line", "Bootstrap", 
"JavaScript Unit Testing", 
"React.js", 
"React.js Part II", 
"How to Deploy a Website"];

const nameOfRCertificates = ["", "Trilha Conectar", "Trilha Fundamentar"]

for (let i = 1; i <= 16; i++) {
    const ccLinkBox = document.createElement('div');
    ccLinkBox.innerHTML = `<a href="./src/img/certificates/certificate${i}.pdf" target="_blank">${nameOfCCertificates[i]}</a>`;

    ccBox.appendChild(ccLinkBox)
}
for (let i = 1; i <= 2; i++) {
    const rcLinkBox = document.createElement('div');
    rcLinkBox.innerHTML = `<a href="./src/img/certificates/rocketseat-certificate${i}.pdf" target="_blank">${nameOfRCertificates[i]}</a>`;

    rcBox.appendChild(rcLinkBox)
}

const closeWindow = document.querySelector('.close-window');
const showMyCerts = document.querySelector('.my-cert-button');

closeWindow.addEventListener('click', () => {
    certificateWindow.classList.remove('open-window')
    certificateWindow.classList.add('close-window')
    setTimeout(() => {
        certificateWindow.style.display = 'none';
    },150)
})

showMyCerts.addEventListener('click', () => {
    certificateWindow.style.display = 'block';
    certificateWindow.classList.add('open-window')
    certificateWindow.classList.remove('close-window')
})
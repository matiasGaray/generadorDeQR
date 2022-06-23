const formulario = document.getElementById("formulario");
const codigoQR = document.getElementById("codigoQR")

const QR = new QRCode(codigoQR)

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    QR.makeCode(formulario.link.value)
})
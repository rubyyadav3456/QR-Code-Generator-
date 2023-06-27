const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

const qrcontainer = document.querySelector('.qr-body');

let size = sizes.value;
generatebtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code.")
    }
});

sizes.addEventListener('change' , (e)=>{
    size = e.target.value;
    isEmptyInput();
    generateQRCode();
});

downloadbtn.addEventListener('click' , ()=>{
    let img = document.querySelector('.qr-body img')
    if(img.getAttribute('src')!== null){
        let imgAtrr = img.getAttribute('src');
        downloadbtn.setAttribute('href', imgAtrr)
    }
    else{
        downloadbtn.setAttribute('href' `${document.querySelector('canvas').toDataURL}`);
    }
});

function isEmptyInput(){
    e.preventDefault();
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code.")
    }
}

function generateQRCode() {
    qrcontainer.innerHTML = "";
    new QRCode(qrcontainer, {
        text: qrText.value,
        height: sizes.value,
        width: sizes.value,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

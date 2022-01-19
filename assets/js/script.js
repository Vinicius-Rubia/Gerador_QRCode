'use strict';

document.querySelector('.generate-qr-code').addEventListener('click', function() {
    const url = document.querySelector('.qr-url').value;
    const size = document.querySelector('.qr-size').value;
    
    const qrcode = new QRCode(document.querySelector('#qrcode'), {
        text: `${url}`,
        width: `${size}`,
        height: `${size}`,
        colorDark: `black`,
        colorLight: `white`,
        correctLevel: QRCode.CorrectLevel.H
    });
});

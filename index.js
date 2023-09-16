const codeReader = new ZXing.BrowserQRCodeReader();
const startButton = document.getElementById('startButton');
const previewElem = document.getElementById('preview');

// Utilisation de la méthode getUserMedia pour accéder à la caméra et afficher le flux vidéo en direct
navigator.mediaDevices.getUserMedia({
    video: { facingMode: { exact: "environment" } }
})
    .then(function (stream) {
        previewElem.srcObject = stream;
        previewElem.play();
    });
startButton.addEventListener('click', () => {
    codeReader.decodeFromVideoDevice(undefined, 'preview', (result) => {
        console.log(result.text);
        if (result.text == '8794611068') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode1.html'
        }
        else if (result.text == '1846000652') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode3.html'
        }
        else if (result.text == '7444926685') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode4.html'
        }
        else if (result.text == '5918840435') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode5.html'
        }
        else if (result.text == '5130781204') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode6.html'
        }
        else if (result.text == '9922394131') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode7.html'
        }
        else if (result.text == '3502733346') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode8.html'
        }
        else if (result.text == '1137500553') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode9.html'
        }
        else if (result.text == '1801230946') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode10.html'
        }
        else if (result.text == '6282051153') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode11.html'
        }
        else if (result.text == '2287705797') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode12.html'
        }
        else if (result.text == '4439676421') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode13.html'
        }
        else if (result.text == '1473375521') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode14.html'
        }
        else if (result.text == '4504330209') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode15.html'
        }
        else if (result.text == '3500735132') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode16.html'
        }
        else if (result.text == '4410645953') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode17.html'
        }
        else if (result.text == '2516796792') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode18.html'
        }
        else if (result.text == '8803267567') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode19.html'
        }
        else if (result.text == '5261002061') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode20.html'
        }
        else if (result.text == '1302452782') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode21.html'
        }
        else if (result.text == '7363007762') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode23.html'
        }
        else if (result.text == '3882815918') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode25.html'
        }
        else if (result.text == '1576146521') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode52.html'
        }
        else if (result.text == '8448567216') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode26.html'
        }
        else if (result.text == '7795033214') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode27.html'
        }
        else if (result.text == '2395919487') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode28.html'
        }
        else if (result.text == '3466611791') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode29.html'
        }
        else if (result.text == '6458317749') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode31.html'
        }
        else if (result.text == '4577166280') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode32.html'
        }
        else if (result.text == '4172867195') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode35.html'
        }
        else if (result.text == '9162345951') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode36.html'
        }
        else if (result.text == '6175050565') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode37.html'
        }
        else if (result.text == '9663567776') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode38.html'
        }
        else if (result.text == '1812243825') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode39.html'
        }
        else if (result.text == '5228059996') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode40.html'
        }
        else if (result.text == '3457443474') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode41.html'
        }
        else if (result.text == '2983317321') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode42.html'
        }
        else if (result.text == '3188922428') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode43.html'
        }
        else if (result.text == '5387522983') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode45.html'
        }
        else if (result.text == '5388165446') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode46.html'
        }
        else if (result.text == '6008329097') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode47.html'
        }
        else if (result.text == '7728898817') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode48.html'
        }
        else if (result.text == '7100088985') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode49.html'
        }
        else if (result.text == '4046559436') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode50.html'
        }
        else if (result.text == '9432458742') {
            window.location.href = '../Scan_Qr_Code/qrcode/QrCode51.html'
        }
    });
});
codeReader.getVideoInputDevices().then((videoInputDevices) => {
    if (videoInputDevices.length > 0) {
        const rearVideoDevice = videoInputDevices.find(device => device.label.toLowerCase().includes('back'));
        if (rearVideoDevice) {
            codeReader.decodeFromVideoDevice(rearVideoDevice.deviceId, 'preview', (result) => {
                console.log(result.text);
                if (result.text == '8794611068') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode1.html'
                }
                else if (result.text == '1846000652') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode3.html'
                }
                else if (result.text == '7444926685') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode4.html'
                }
                else if (result.text == '5918840435') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode5.html'
                }
                else if (result.text == '5130781204') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode6.html'
                }
                else if (result.text == '9922394131') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode7.html'
                }
                else if (result.text == '3502733346') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode8.html'
                }
                else if (result.text == '1137500553') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode9.html'
                }
                else if (result.text == '1801230946') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode10.html'
                }
                else if (result.text == '6282051153') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode11.html'
                }
                else if (result.text == '2287705797') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode12.html'
                }
                else if (result.text == '4439676421') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode13.html'
                }
                else if (result.text == '1473375521') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode14.html'
                }
                else if (result.text == '4504330209') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode15.html'
                }
                else if (result.text == '3500735132') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode16.html'
                }
                else if (result.text == '4410645953') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode17.html'
                }
                else if (result.text == '2516796792') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode18.html'
                }
                else if (result.text == '8803267567') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode19.html'
                }
                else if (result.text == '5261002061') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode20.html'
                }
                else if (result.text == '1302452782') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode21.html'
                }
                else if (result.text == '7363007762') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode23.html'
                }
                else if (result.text == '3882815918') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode25.html'
                }
                else if (result.text == '8448567216') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode26.html'
                }
                else if (result.text == '7795033214') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode27.html'
                }
                else if (result.text == '2395919487') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode28.html'
                }
                else if (result.text == '3466611791') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode29.html'
                }
                else if (result.text == '6458317749') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode31.html'
                }
                else if (result.text == '4577166280') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode32.html'
                }
                else if (result.text == '4172867195') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode35.html'
                }
                else if (result.text == '9162345951') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode36.html'
                }
                else if (result.text == '6175050565') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode37.html'
                }
                else if (result.text == '9663567776') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode38.html'
                }
                else if (result.text == '1812243825') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode39.html'
                }
                else if (result.text == '5228059996') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode40.html'
                }
                else if (result.text == '3457443474') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode41.html'
                }
                else if (result.text == '2983317321') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode42.html'
                }
                else if (result.text == '3188922428') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode43.html'
                }
                else if (result.text == '1576146521') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode52.html'
                }
                else if (result.text == '5387522983') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode45.html'
                }
                else if (result.text == '5388165446') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode46.html'
                }
                else if (result.text == '6008329097') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode47.html'
                }
                else if (result.text == '7728898817') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode48.html'
                }
                else if (result.text == '7100088985') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode49.html'
                }
                else if (result.text == '4046559436') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode50.html'
                }
                else if (result.text == '9432458742') {
                    window.location.href = '../Scan_Qr_Code/qrcode/QrCode51.html'
                }
                // Redirige vers l'URL du code QR
            }).catch((err) => {
                console.error(err);
            });
        } else {
            console.warn('Aucune caméra arrière disponible.');
        }
    } else {
        console.error('Aucun périphérique de capture vidéo détecté.');
    }
});
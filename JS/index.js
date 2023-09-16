const codeReader = new ZXing.BrowserQRCodeReader();
const startButton = document.getElementById('startButton');
const previewElem = document.getElementById('preview');

function redirectToPage(qrCodeValue) {
    const pageMap = {
        '8794611068': 'QrCode1.html',
        '1846000652': 'QrCode3.html',
        '7444926685': 'QrCode4.html',
        '5918840435': 'QrCode5.html',
        '5130781204': 'QrCode6.html',
        '9922394131': 'QrCode7.html',
        '3502733346': 'QrCode8.html',
        '1137500553': 'QrCode9.html',
        '1801230946': 'QrCode10.html',
        '6282051153': 'QrCode11.html',
        '2287705797': 'QrCode12.html',
        '4439676421': 'QrCode13.html',
        '1473375521': 'QrCode14.html',
        '4504330209': 'QrCode15.html',
        '3500735132': 'QrCode16.html',
        '4410645953': 'QrCode17.html',
        '2516796792': 'QrCode18.html',
        '8803267567': 'QrCode19.html',
        '5261002061': 'QrCode20.html',
        '1302452782': 'QrCode21.html',
        '7363007762': 'QrCode23.html',
        '3882815918': 'QrCode25.html',
        '1576146521': 'QrCode52.html',
        '8448567216': 'QrCode26.html',
        '7795033214': 'QrCode27.html',
        '2395919487': 'QrCode28.html',
        '3466611791': 'QrCode29.html',
        '6458317749': 'QrCode31.html',
        '4577166280': 'QrCode32.html',
        '4172867195': 'QrCode35.html',
        '9162345951': 'QrCode36.html',
        '6175050565': 'QrCode37.html',
        '9663567776': 'QrCode38.html',
        '1812243825': 'QrCode39.html',
        '5228059996': 'QrCode40.html',
        '3457443474': 'QrCode41.html',
        '2983317321': 'QrCode42.html',
        '3188922428': 'QrCode43.html',
        '5387522983': 'QrCode45.html',
        '5388165446': 'QrCode46.html',
        '6008329097': 'QrCode47.html',
        '7728898817': 'QrCode48.html',
        '7100088985': 'QrCode49.html',
        '4046559436': 'QrCode50.html',
        '9432458742': 'QrCode51.html',
    };

    const page = pageMap[qrCodeValue];
    if (page) {
        window.location.href = `../Scan_Qr_Code/html/${page}`;
    } else {
        console.log(`Code QR non reconnu : ${qrCodeValue}`);
    }
}

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
        redirectToPage(result.text);
    });
});

codeReader.getVideoInputDevices().then((videoInputDevices) => {
    if (videoInputDevices.length > 0) {
        const rearVideoDevice = videoInputDevices.find(device => device.label.toLowerCase().includes('back'));
        if (rearVideoDevice) {
            codeReader.decodeFromVideoDevice(rearVideoDevice.deviceId, 'preview', (result) => {
                console.log(result.text);
                redirectToPage(result.text);
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
// Récupérer l'élément input par son id
var champSaisie = document.getElementById("monInput");

// Récupérer le bouton par son id
var bouton = document.getElementById("monBouton");

// Ajouter un gestionnaire d'événements "click" au bouton
bouton.addEventListener("click", function() {
    // Récupérer la valeur saisie par l'utilisateur
    var valeurSaisie = champSaisie.value;

    // Utiliser la valeur saisie
    console.log("La valeur saisie est : " + valeurSaisie);
});

// ==UserScript==
// @name         ExonUtils - No tracers ver
// @namespace    https://github.com/777Portal
// @version      0.0.1
// @description  Exon's misc features
// @author       Exon
// @match        *://moomoo.io/*
// @require      https://github.com/MooMooForge/MooMoo.js/releases/download/2.2.0/MooMoo-js.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @grant        none
// ==/UserScript==

const MooMoo = (function MooMooJS_beta() {})[69]

const webhookurl = "YOUR DISCORD WEBHOOK" //set to your webhook url

let CommandManager = MooMoo.CommandManager;

let name;
let currentUrl;

MooMoo.onGameLoad = () => {
    // document.title = `ExonUtils`
    currentUrl = window.location.href;
}


var lastMsg = Date.now();

MooMoo.on("killPlayer", (data) => {
    console.log("died, sending image to discord")

    const canvas = document.getElementById("gameCanvas");
    let img = canvas.toDataURL();

    setTimeout(function() {
        // console.log(img)
        sendMessage(img, "Player died!", "FF0000")
    }, 250);
});

MooMoo.CommandManager.registerCommand("ss", (Command, args) => {
    Command.reply("ExonUtils -  creating SS");
    const canvas = document.getElementById("gameCanvas");
    let img = canvas.toDataURL();

    setTimeout(function() {
        sendMessage(img, "screenshot taken from ingame", "#FFBF00")
    }, 1000);
})

function dataURLtoBlob(dataUrl) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}


async function sendMessage(imgDataUrl, message, color) {
    name = MooMoo.myPlayer.name
    console.log(name)
    try {
        const blob = dataURLtoBlob(imgDataUrl);
        const file = new File([blob], 'upload.png');

        const formData = new FormData();
        formData.append('file', file);

        const embed = {
            image: {
                url: 'attachment://upload.png'
            },
            footer: {
                text: 'ExonUtils - ⭐',
                icon_url: "https://avatars.githubusercontent.com/u/127454667?v=4"
            },
            description: name + ' in [this server]('+ currentUrl +')',
            title: message,
            color: parseInt(color, 16),
        };

        const payload = {
            username: "MooMoo",
            avatar_url: "https://moomoo.io/img/hats/hat_28.png",
            embeds: [embed],
        };

        formData.append('payload_json', JSON.stringify(payload));

        const response = await fetch(webhookurl, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
            MooMoo.sendPacket("ch", "Er - Network res not ok");
        }

        console.log('Message sent successfully to Discord webhook.');
        MooMoo.sendPacket("ch", "ExonUtils - Sent SS!");
    } catch (error) {
        MooMoo.sendPacket("ch", "Er - sending ss error");
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again later.');
    }
}

function downloadBlob(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

console.log("innit frfr")
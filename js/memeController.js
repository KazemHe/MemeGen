'use ctrict'

var gElCanvas
var gCtx
var gIsDrag = false
var gStartPos

let gTopTxt = ''

function onInit() {
    console.log('hi')
    renderGallery()
    // resizeCanvas()

}
function renderMeme() {



}

// to back to the main page - canvas and controller
function openEditor() {

    document.querySelector('.gallery-container').classList.add('hidden')

    document.querySelector('.canvas-container').classList.remove('hidden')
    document.querySelector('.editor').classList.remove('hidden')
}






function getImgById(imgId) {

    for (var i = 0; i < gImgs.length; i++) {
        if (imgId === gImgs[i].id)
            return gImgs[i].url
    }

}

function onImgSelect(imgId) {

    openEditor()

    image = new Image();
    image.src = getImgById(imgId)

    let canvas = document.getElementById('meme-canvas')

    const ctx = canvas.getContext("2d");


    ctx.drawImage(image, 0, 0);

    const width = image.width;
    const height = image.height;
    const yOffset = height / 25;
    ctx.textBaseline = "top";

    ctx.strokeText(gTopTxt, width / 2, yOffset);
    // ctx.fillText('tal', width / 2, yOffset);








    // ctx.textBaseline = "bottom";
    // ctx.strokeText(gTopTxt, width / 2, height - yOffset);
    // ctx.fillText('tal', width / 2, height - yOffset);
}



function renderMeme() {


}


function renderCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}




function onChangTtxt(ev) {
    console.log(ev)
    // console.log()


    let canvas = document.getElementById('meme-canvas')
    const ctx = canvas.getContext("2d");


    // const width = image.width;
    // const height = image.height;
    const width = 500
    const height = 500
    const yOffset = height / 25;
    ctx.textBaseline = "top";
    ctx.strokeText(ev.value, width / 2, yOffset);

    // gTopTxt = 

}
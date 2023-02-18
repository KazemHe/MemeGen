'use ctrict'

var gMem
var gmyMems = []
let gFontColor = document.getElementById('font-color').value
let gFontSize = 20
var gElCanvas = document.getElementById('meme-canvas')
var gCtx
// let gTopTxt = ''
// let gBottomTxt = ''

function onInit() {
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    rendermemsGallery()
    
    setTimeout(() => {
        renderMeme()
    }, 400);
}



function renderMeme() {

    image = new Image();
    image.src = getImgById(gMeme.selectedImgId)
    
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext("2d");
    gCtx.drawImage(image, 0, 0);

    drawTopLine()
    drawBottomLine()


}

function renderCanvas() {

    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext("2d");
    const width = gElCanvas.width;
    const height = gElCanvas.height
    // const yOffset = height / 25;
    gCtx.strokstyle = gFontColor
    gCtx.fillText = gFontColor
    gCtx.font = gFontSize + 'px  Impact'

    return gCtx
}


function drawTopLine() {
    gCtx = renderCanvas()

    let text = getTopLine()
    let topTxt = text.txt
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'top'
    gCtx.fillStyle = gFontColor
    gCtx.strokeText(topTxt, gElCanvas.width / 2, gElCanvas.height / 25);

}

function onChangeTop(ev) {

    let topTxt = ev.value
    gMeme.lines[0] = {
        textIdx: 0,
        txt: topTxt,
        size: gFontSize,
        align: 'top',
        color: gFontColor
    }
    renderMeme()
}

function drawBottomLine() {

    let yOffset = gElCanvas.height / 25
    gCtx = renderCanvas()
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    let bottomTxt = gMeme.lines[1].txt
    gCtx.strokeStyle = gFontColor
    gCtx.strokeText(bottomTxt, gElCanvas.width / 2, gElCanvas.height - yOffset);
}

function onChangeBottom(ev) {

    let bottomtext = ev.value
    gMeme.lines[1] = {
        textIdx: 1,
        txt: bottomtext,
        size: gFontSize,
        align: 'bottom',
        color: gFontColor
    }

    renderMeme()
}

// to back to the main page - canvas and controller
function openEditor() {

    document.querySelector('.gallery-container').classList.add('hidden')
    document.querySelector('.mems-container').classList.add('hidden')

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

    ctx.strokeText(gTopTxt, canvas.width, canvas.height);
    gMeme.selectedImgId = imgId

}


function setColor(ev) {
    gFontColor = ev
    renderMeme()
}

function increaseFont() {
    gFontSize += 4
    renderMeme()

}
function decreaseFont() {
    gFontSize -= 4
    renderMeme()

}

function onAddLine() {
    let strHtml = `<input id="botton-line" type="text" contenteditable="true" class"bline"  placeholder="enter bottom text" onkeyup="onChangeBottom(this)">`
    document.querySelector('.new-line').innerHTML += strHtml
}


function onReplace() {
    replace()
    renderMeme()
}

function onClear() {

    image = new Image();
    image.src = getImgById(gMeme.selectedImgId)
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext("2d");
    gCtx.drawImage(image, 0, 0);

    document.querySelector('.line').value = ''

    gMeme.lines.forEach(line => {

        line.txt = ''
    })

    let strHtml = ``
    document.querySelector('.new-line').innerHTML = strHtml
}


function onSave() {

    gmyMems = loadFromStorage(KEY_MEME)

    if (gmyMems === null) gmyMems = []

    const imgContent = gElCanvas.toDataURL('image/jpeg')

    gMeme.currImg = imgContent
    gmyMems.push(gMeme)

    gMeme.selectedLineIdx += 1
    saveToStorage(KEY_MEME, gmyMems)
    rendermemsGallery()

}

function rendermemsGallery() {

    const myMems = loadFromStorage(KEY_MEME)

    if (myMems === null) return

    let strHTML = myMems.map(meme => `<article>
    <img class="img" onclick="onMemeSelect(${meme.selectedLineIdx})" src="${meme.currImg}">
    </article>
    `)

    document.querySelector('.memsImg-container').innerHTML = strHTML.join('')

}

function onMemeSelect(selectedLineIdx) {
    openEditor()
    const myMems = loadFromStorage(KEY_MEME)


    let meme = myMems.find(meme => meme.selectedLineIdx === selectedLineIdx)
    console.log(meme)
    gMeme = meme
    console.log(meme)

    renderMeme()

}

function onSetLang(lang) {

    setLang(lang)
    const rtlLangs = ['he']
    // DONE: if lang is hebrew add RTL class to document.body
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')

    doTrans()
    // onInit()
}
'use ctrict'
var gMem
let newLine
var glinesNum = 1
var gmyMems = []
let gFontColor = document.getElementById('font-color').value
let gFontSize = 20
var gElCanvas = document.getElementById('meme-canvas')
var gCtx = gElCanvas.getContext('2d')



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

    drawLine()


}

function renderCanvas() {

    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext("2d");
    const width = gElCanvas.width;
    const height = gElCanvas.height
    gCtx.strokstyle = gFontColor
    gCtx.font = gFontSize + 'px  Impact'

    return gCtx
}




function drawLine() {
    gCtx = renderCanvas()


    gMeme.lines.forEach(function (line) {


        gCtx.lineWidth = '2';
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = line.color
        gCtx.textAlign = 'center';
        gCtx.font = `${line.size}px arial`;
        gCtx.fillText(line.txt, line.pos.x, line.pos.y);
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y) //img,x,y,xend,yend
    })



}




function onChangeTex(ev) {


    let text = ev.value

    gMeme.lines[gMeme.selectedLineIdx].txt = text

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

    ctx.strokeText(image, canvas.width, canvas.height);
    gMeme.selectedImgId = imgId

}


function setColor(ev) {

    let color = ev

    gMeme.lines[gMeme.selectedLineIdx].color = color



    renderMeme()
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 2
    renderMeme()

}
function decreaseFont() {




    gMeme.lines[gMeme.selectedLineIdx].size -= 2



    renderMeme()

}



function onAddLine() {

    if (glinesNum === 1) {

        newLine = { txt: 'new', size: gFontSize, align: 'center', color: gFontColor, pos: { x: 200, y: 350 } }
        glinesNum++
        document.querySelector('.line').value = ''

    } else if (glinesNum === 2) {
        newLine = { txt: 'new', size: gFontSize, align: 'center', color: gFontColor, pos: { x: 200, y: 200 } }
        glinesNum++

        document.querySelector('.line').value = ''
    } else if (glinesNum === 3) {
        return
    }

    gMeme.lines.push(newLine)
    if (glinesNum !== 0) switchLine()
    renderMeme()
}





function switchLine() {
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0;
    document.querySelector('.line').value = ''
}






function onClear() {

    image = new Image();
    image.src = getImgById(gMeme.selectedImgId)
    gElCanvas = document.getElementById('meme-canvas')
    gCtx = gElCanvas.getContext("2d");
    



    if (glinesNum === 1) {
        gMeme.lines[gMeme.selectedLineIdx].txt = ''
    }

    if (glinesNum !== 1) {
        glinesNum--

        gMeme.lines.splice(gMeme.selectedLineIdx, gMeme.selectedLineIdx + 1)

    }

    if (gMeme.selectedLineIdx !== 0) gMeme.selectedLineIdx--

    document.querySelector('.line').value = ''
    renderMeme()

   
}


function onSave() {

    gmyMems = loadFromStorage(KEY_MEME)

    if (gmyMems === null) gmyMems = []

    const imgContent = gElCanvas.toDataURL('image/jpeg')

    gMeme.currImg = imgContent
    gmyMems.push(gMeme)

    gMeme.selectedimgIdx += 1
    saveToStorage(KEY_MEME, gmyMems)
    rendermemsGallery()

}

function rendermemsGallery() {

    const myMems = loadFromStorage(KEY_MEME)

    if (myMems === null) return

    let strHTML = myMems.map(meme => `<article>
    <img class="img" onclick="onMemeSelect(${meme.selectedimgIdx})" src="${meme.currImg}">
    </article>
    `)

    document.querySelector('.memsImg-container').innerHTML = strHTML.join('')

}

function onMemeSelect(selectedimgIdx) {
    openEditor()
    const myMems = loadFromStorage(KEY_MEME)


    let meme = myMems.find(meme => meme.selectedimgIdx === selectedimgIdx)
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


function onChangeTextPos(pos) {



    if (pos === 'down') gMeme.lines[gMeme.selectedLineIdx].pos.y += 10
    else if (pos === 'up') gMeme.lines[gMeme.selectedLineIdx].pos.y -= 10
    else if (pos === 'left') gMeme.lines[gMeme.selectedLineIdx].pos.x -= 10
    else if (pos === 'right') gMeme.lines[gMeme.selectedLineIdx].pos.x += 10
    drawLine()
    renderMeme()

}





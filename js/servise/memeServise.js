'use strict'
const KEY_MEME = 'memesDB'


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


var gMeme = {
    selectedImgId: 1,
    currImg: '',

    selectedimgIdx: 0,
    selectedLineIdx: 0,
    lines: [
        {
            textIdx: 0,
            txt: 'I am an example',
            size: gFontSize,
            align: 'center',
            color: gFontColor,
            pos: { x:200, y:50 },

        },

        
    ]
}





function getMeme() {
    return gMeme

}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container canvas')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
    console.log(gElCanvas.height)

}



function replace() {
    let toptxt = gMeme.lines[0].txt
    let bottomtxt = gMeme.lines[1].txt
    gMeme.lines[1].txt = toptxt
    gMeme.lines[0].txt = bottomtxt

}



function openMemes() {

    document.querySelector('.mems-container').classList.remove('hidden')
    document.querySelector('.canvas-container').classList.add('hidden')
    document.querySelector('.editor').classList.add('hidden')
    document.querySelector('.gallery-container').classList.add('hidden')
}


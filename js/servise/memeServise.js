'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }




var gMeme = {
    selectedImgId: image.id,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function getMeme() {
    return gMeme


}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container canvas')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight

}

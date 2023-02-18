var gEmoji

function onAddSticker(ev) {

    drawEmoji(ev)

}


function drawEmoji(ev) {
    gCtx = renderCanvas()

    let emoji = ev
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'top'
    gCtx.fillStyle = gFontColor
    gCtx.strokeText(emoji, gElCanvas.width / 7, gElCanvas.height / 7);
}


// //Check if the click is inside the circle 
// function isEmojiClicked(clickedPos) {
//     const { pos } = gEmoji
//     // Calc the distance between two dots
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     // console.log('distance', distance)
//     //If its smaller then the radius of the circle we are inside
//     return distance <= gEmoji.size
//   }
  
  
//   function setEmojiDrag(isDrag) {
//     isDrag = isDrag
//   }
  
//   // Move the circle in a delta, diff from the pervious pos
//   function moveEmoji(dx, dy) {
//     gEmoji.pos.x += dx
//     gEmoji.pos.y += dy
  
//   }
  

  
// function getEmoji() {
//     return gEmoji
//   }
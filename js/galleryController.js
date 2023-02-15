'use stricr'


// to move to the gallery page
function openGallery() {

    document.querySelector('.gallery-container').classList.remove('hidden')
    console.log('hi')
    document.querySelector('.canvas-container').classList.add('hidden')
    document.querySelector('.editor').classList.add('hidden')


}


function renderGallery() {
    console.log(gImgs)
    const images = getImages()
    let strHTML = images.map(image => `<article>
    <img class="img" onclick="onImgSelect(${image.id})" src="${image.url}">
    </article>
    `)
    console.log(strHTML)

    document.querySelector('.image-container').innerHTML = strHTML.join('')


}




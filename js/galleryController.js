'use stricr'


// to move to the gallery page
function openGallery() {

    document.querySelector('.gallery-container').classList.remove('hidden')
    document.querySelector('.canvas-container').classList.add('hidden')
    document.querySelector('.editor').classList.add('hidden')
    document.querySelector('.mems-container').classList.add('hidden')


}


function renderGallery() {
    const images = getImages()
    let strHTML = images.map(image => `<article>
    <img class="img" onclick="onImgSelect(${image.id})" src="${image.url}">
    </article>
    `)

    document.querySelector('.image-container').innerHTML = strHTML.join('')


}




'use strict'


var gCurrLang = 'en'

var gTrans = {
    logo: {
        en: 'memegen',
        he:'מימאמיה',
    },
    gallery: {
        en: 'gallery',
        he: 'גלריה',
    },
    editor: {
        en: 'editor',
        he: 'עורך',
    },
    Memes: {
        en: 'Memes',
        he: 'הממים שלי'
    },
    download: {
        en: 'download',
        he: 'הורדה',
    },
    share: {
        en: 'share',

        he: 'שיתוף',
    },
    save: {
        en: 'save',
        he: 'שמירה',
    },

}


function getTrans(transKey) {
    // DONE: if key is unknown return 'UNKNOWN'
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'
    // DONE: get from gTrans
    let translation = transMap[gCurrLang]
    // DONE: If translation not found - use english
    if (!translation) translation = transMap.en
    return translation
}

function doTrans() {
    // DONE: 
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const translation = getTrans(transKey)
        if (el.placeholder) el.placeholder = translation
        else el.innerText = translation

        // const prop = el.placeholder ? 'placeholder': 'innerText'
        // el[prop] = translation


        // for each el:
        // get the data-trans and use getTrans to replace the innerText 
        // ITP: support placeholder    
    })
}

function setLang(lang) {
    gCurrLang = lang
}

function formatNumSimple(num) {
    return num.toLocaleString('il')
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num)
}

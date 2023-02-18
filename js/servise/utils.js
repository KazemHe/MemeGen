//makeid
function _makeId(length = 6) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}


//localstorage


function saveToStorage(key, value) {
    var json = JSON.stringify(value)
    localStorage.setItem(key, json)
}

function loadFromStorage(key) {
    var json = localStorage.getItem(key)
    var value = JSON.parse(json)
    return value
}

function conte() {
    var ini = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var pas = Number(document.getElementById('pas').value)
    var res = document.getElementById('res')
    res.innerHTML = '<p></p>'

    for (var c = ini; c<=fim; c+=pas) {
        res.innerHTML += `${c} -> `
    }
    res.innerHTML += 'Fim'
}
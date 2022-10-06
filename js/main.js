// https://api.nasa.gov/planetary/apod?api_key=JWydXxvFCaUjBZtN2qOcME0pFeBgeMeoSwDhhxkt

document.querySelector('button').addEventListener('click', getAPOD)

function getAPOD(){
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=JWydXxvFCaUjBZtN2qOcME0pFeBgeMeoSwDhhxkt&date=${date}`
}
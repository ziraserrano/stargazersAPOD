// https://api.nasa.gov/planetary/apod?api_key=JWydXxvFCaUjBZtN2qOcME0pFeBgeMeoSwDhhxkt

document.querySelector('button').addEventListener('click', getAPOD)


function getAPOD(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=JWydXxvFCaUjBZtN2qOcME0pFeBgeMeoSwDhhxkt&date=${date}`
  document.querySelector('input').value = ""

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      if( data.media_type === 'image' ){   
        document.querySelector('img').src = data.hdurl
      }else if(data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }
      
      document.querySelector('#description').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
    
  }
  

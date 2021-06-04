
const message = document.querySelector('#message')


function addMovie(event) {
    event.preventDefault()
   let inputField = document.querySelector('#add-movie');
   
   const movie = document.createElement('li')

   const movieTitle = document.createElement ('span')
   movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
   movie.appendChild(movieTitle);
    
    

   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'x'
   deleteBtn.addEventListener('click', deleteMovie)
   movie.appendChild(deleteBtn)
  
   document.querySelector("ul").appendChild(movie)
inputField.value = ''
}
document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(event) {
    message.textContent = 'Movie deleted!'
    event.target.parentNode.remove()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked') 
    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie finished!'
    } else {
        message.textContent = 'Movie needs to be seen!'
    }
}
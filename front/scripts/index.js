const container = document.getElementById('card');
const URL = 'https://api.1rodemayo.com/movies';

$.get(URL, (data) => {
  renderCards(data);
})


const renderCards = (data) =>{
  
class Film {
    constructor(title, year, director, duration, genre, rate, poster){
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster; 
    }

    generateCard() {
        return `ls
            <div class="col info">
              <a class= "titleCard" href=" "> ${this.title} (${this.year})</a>
              <p><strong class="director">Director:</strong> ${this.director}</p>
              <p><strong>Duración:</strong> ${this.duration}</p>
              <p><strong>Género:</strong> ${this.genre.join(', ')}</p>
              <p><strong>Rate:</strong> ${this.rate}</p>
              <img src="${this.poster}" alt="${this.title}" class="poster">
            </div>
        `;
    }
}

const films = data.map(movie => new Film(
    movie.title,
    movie.year,
    movie.director,
    movie.duration,
    movie.genre,
    movie.rate,
    movie.poster
  ));


  films.forEach(film => {
    const cardHTML = film.generateCard();
    container.innerHTML += cardHTML;
  });

   
}
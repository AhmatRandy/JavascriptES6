const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
   try {
      const inputKeyword = document.querySelector('.input-keyword');
      const movies = await getMovies(inputKeyword.value);
      showMovies(movies);
   } catch (err) {
      alert(err);
   }
});

//  even binding
document.addEventListener('click', async function (e) {
   if (e.target.classList.contains('modal-detail-button')) {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUiDetail(movieDetail);
   }
});

function getMovies(keyword) {
   return fetch('http://www.omdbapi.com/?apikey=c296a7f8&s=' + keyword)
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.statusText);
         }
         return response.json();
      })
      .then((response) => {
         if (response.Response === 'False') {
            throw new Error(response.Error);
         }
         return response.Search;
      });
}

function showMovies(movies) {
   let cards = '';
   movies.forEach((m) => (cards += showCards(m)));
   const movieContainer = document.querySelector('.movie-container');
   movieContainer.innerHTML = cards;
}

function getMovieDetail(imdbid) {
   return fetch('http://www.omdbapi.com/?apikey=c296a7f8&i=' + imdbid)
      .then((response) => response.json())
      .then((m) => m);
}

function updateUiDetail(m) {
   const movieDetail = showDetailCards(m);
   const modalBody = document.querySelector('.modal-body');
   modalBody.innerHTML = movieDetail;
}

function showCards(m) {
   return /*html*/ `<div class="col-md-4 my-3">
            <div class="card" style="width: 18rem;">
               <img src="${m.Poster}" class="card-img-top" alt="">
               <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                  <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
               </div>
            </div>
         </div>`;
}

function showDetailCards(m) {
   return /*html*/ `<div class="container-fluid">
               <div class="row">
                  <div class="col-md-3">
                     <img src="${m.Poster}"class="img-fluid" alt="">
                  </div>
                  <div class="col-md">
                     <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                        <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writter :</strong>${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                     </ul>
                  </div>
               </div>
            </div>`;
}

function getApi() {
   fetch('https://reqres.in/api/users');
   .then((response) => response.json())
   .then((data) => {
      const arr = data.data;
      console.log(arr);
   });
}
async function cobaAsync() {
   try {
      const async = await getApi();
      console.log(async);
   } catch (error) {
      console.error(error);
   }
}
cobaAsync();

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', async function () {
// const inputKeyword = document.querySelector('.input-keyword');
// });

// function carda(m) {
//    return /*html*/ ` <ul class="list-group">
//          <li class="list-group-item">name  :</li>
//          <li class="list-group-item">email :</li>
//          <li class="list-group-item"></li>
//          <li class="list-group-item">Frist name :</li>
//          <li class="list-group-item">lastName</li>
//       </ul>`;
// }

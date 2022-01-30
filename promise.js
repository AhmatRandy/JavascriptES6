// ? Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// * janji (terpenuhi = fulfilled / ingkar =  rejected / pending)

// ? callback(resolve = terpenuhi , reject =  tidak terpenuhi, finally =  waktu tunggu selesai)

// ? aksi jika terpenuhi (then )
// ? aksi reject (catch)

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//    if (ditepati) {
//       resolve('Janji di tepati');
//    } else {
//       reject('Ingkar janji..');
//    }
// });

// janji1
//    .then((response) => console.log('oke : ' + response))
//    .catch((response) => console.log('not oke ' + response));

// ? contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//    if (ditepati) {
//       setTimeout(() => {
//          resolve('ditepati setelah beberapa waktu');
//       }, 5000);
//    } else {
//       setTimeout(() => {
//          resolve('tidak ditepati setelah beberapa waktu');
//       }, 5000);
//    }
// });
// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// console.log('selesai');

// ? contoh 3 method all

const film = new Promise((resolve) => {
   setTimeout(() => {
      resolve([
         {
            judul: 'Avengers',
            tahun: 2016,
            Actors: 'Amat',
         },
      ]);
   }, 5000);
});
const cuaca = new Promise((resolve) => {
   setTimeout(() => {
      resolve([
         {
            keadaan: 'Panas',
            tahun: 2016,
            berakhir: 'tamat',
         },
      ]);
   }, 200);
});

// function showCuaca() {
//    cuaca.then((response) => response).then((response) => console.log(response));
// }

// function randy() {
//    console.log('this is promise callback');
//    showCuaca();
// }
// console.log(randy());

Promise.all([film, cuaca]).then((response) => {
   // console.log(film);
   const [film, cuaca] = response;
   console.log(film);
   console.log(cuaca);
});

// const mhs = ['Randy', 'Sandhika', 'Dody'];
// function cetakRandy(cetak) {
// mengambil isi array dengan for biasa
// for (let i = 0; i < cetak.length; i++) {
//    return cetak[0];
// }

// menggunakan forEach
// cetak.forEach((element) => {
//    console.log(element[0]);
// });

// menggunakan for of

// for (let m of mhs) {
//    console.log(m);
// }
// }
// console.log(cetakRandy(mhs));

// looping String
// const string = 'Randy';
// for (const str of string) {
//    console.log(str);
// }


const mhs = ['Randy', 'Sandhika', 'Dody'];
mhs.forEach((element, index) => {
   console.log(`${element} adalah mahasiswa ke ${index + 1}`);
});

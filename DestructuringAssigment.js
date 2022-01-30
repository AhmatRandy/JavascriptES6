// Destructering array
// const arr = ['Ahmat', 'Randy', 'Ganteng', 'bengat'];

// const [satu, dua, tiga, empat] = arr;
// const [satu, , , empat] = arr;
// console.log(satu);

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// assigment variabel

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// menggunakan rest parameter

// const [a, ...values] = [1, 3, 4, 5, 6, 7];
// console.log(values);

// DESTRUCTURING OBJEK

// const mhs = {
//    nama: 'Randy',
//    umur: 24,
//    pekerjaan: 'Programmer',
// };

// const { nama, umur, pekerjaan } = mhs;
// console.log(nama);

// ASSIGMENT TANPA DEKLARASI OBJECT

// ({ nama, umur, pekerjaan } = {
//    nama: 'Ahmat Randy',
//    umur: 24,
//    pekerjaan: 'Programmer',
// });
// console.log(nama);

//ASSIGNMENT KE VARIABEL BARU
// const mhs = {
//    nama: 'Randy',
//    umur: 24,
//    pekerjaan: 'Programmer',
// };

// const { nama: n, umur: u, pekerjaan: p } = mhs;
// console.log(n);

// MEMBERIKAN DEFAULT VALUE

// const mhs = {
//    nama: 'Randy',
//    umur: 24,
//    pekerjaan: 'Programmer',
//    email: 'randyahmat76@gmail.com',
// };

// const { nama, umur, pekerjaan, email = 'email tidak ditemukan' } = mhs;
// console.log(email);

// MENGAMBIL FIELD PADA OBJECT ,SETELAH DIKIRIM SEBAGAI PARAMETER UNTUK FUNCTION

const mhs = {
   id: 123,
   nama: 'Randy',
   umur: 24,
   pekerjaan: 'Programmer',
   email: 'randyahmat76@gmail.com',
};
function getIdMhs({ id }) {
   return id;
}
console.log(getIdMhs(mhs));

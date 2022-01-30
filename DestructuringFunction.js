// Destructuring Function

// function jumlah(a, b) {
//    return [a * b, a + b, a / b, a - b];
// }
// const [kali, tambah, bagi = 'Bagi ora ono', kurang] = jumlah(2, 10);
// console.log(tambah);
// console.log(kali);

// Destructuring Object

// function object(a, b) {
//    return {
//       tambah: a + b,
//       kurang: a - b,
//       bagi: a / b,
//       kali: a * b,
//    };
// }
// const { tambah, kurang, bagi, kali } = object(2, 10);
// console.log(kurang);

// Destructuring Functionn Arguments

// const mhs1 = {
//    nama: 'Randy',
//    umur: 24,
//    email: 'randyahmat76@gmail.com',
// };
// function cetakMhs({ nama, umur }) {
//    return `hallo, nama saya ${nama} saya berumur ${umur}`;
// }
// console.log(cetakMhs(mhs1));

// const mhs1 = {
//    nama: 'Randy',
//    umur: 24,
//    email: 'randyahmat76@gmail.com',
//    nilai: {
//       tugas: 80,
//       uas: 90,
//       prakttikum: 90,
//    },
// };

// function cetakMhs({ nama, umur, nilai: { tugas, uas, prakttikum } }) {
//    return `hallo, nama saya ${nama} saya berumur ${umur} , nilai praktikum saya adalah ${prakttikum}`;
// }
// console.log(cetakMhs(mhs1));

const contacts = [
   {
      firstName: 'Akira',
      lastName: 'Laine',
      number: '0543236543',
      likes: ['Pizza', 'Coding', 'Brownie Points'],
   },
   {
      firstName: 'Harry',
      lastName: 'Potter',
      number: '0994372684',
      likes: ['Hogwarts', 'Magic', 'Hagrid'],
   },
   {
      firstName: 'Sherlock',
      lastName: 'Holmes',
      number: '0487345643',
      likes: ['Intriguing Cases', 'Violin'],
   },
   {
      firstName: 'Kristian',
      lastName: 'Vos',
      number: 'unknown',
      likes: ['JavaScript', 'Gaming', 'Foxes'],
   },
];

function lookUpProfile(name) {
   //  Only change code below this line

   contacts.forEach(function (e) {
      if (e.firstName === name) {
         return [e].likes;
      }
   });
}

// for (let i = 0; i < contacts.length; i++) {
//    if (contacts[i].firstName === name) {
//       return contacts[i][prop] || 'No such property';
//    }
//    //  Only change code above this line
// }
// return 'No such contact';

console.log(lookUpProfile('Harry'));

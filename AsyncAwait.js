function cobaPromise() {
   return new Promise((resolve, reject) => {
      const waktu = 3000;
      if (waktu < 5000) {
         setTimeout(() => {
            resolve('selesai');
         }, waktu);
      } else {
         reject('kelamaan');
      }
   });
}
// const result = cobaPromise();
// result
//    .then((response) => console.log(response))
//    .catch((response) => console.log('kelamaan'));

async function cobaAsync() {
   try {
      const async = await cobaPromise();
      console.log(async);
   } catch (error) {
      console.error(error);
   }
}
cobaAsync();

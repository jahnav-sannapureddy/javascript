const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
//   fetchPromise.then((response) => {
//     console.log(`Received response: ${response.status}`);
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data);
//     });
//   });


fetchPromise.then((response) => {
    if(!response.ok){
        throw new Error(`Http error ${response.status}`);
    }
    return response.json();
})
.then((data) => console.log(data))
.catch((error) => {
    console.error(`Error : ${error}`);
}); 
  console.log("Started request…");
export const fetchDataSingleton = {

async fetchData(){

    while(true){
     await setTimeout(() => {
        console.log("Delayed for 3 second.");
      }, "3000");
    }
}
}
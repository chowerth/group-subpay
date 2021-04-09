import { ref } from "vue";
import { dadJokeApi } from "boot/axios";
function dadJokeStuff() {
  const dadJoke = ref("");
  // Potentially create an ApiService: https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
  // Potentially pass in a reactive variable and assign to that as opposed to always using dadJoke?
  async function getDadJoke() {
    dadJoke.value = ""; // Used to trigger the skeleton animation...remove if unwanted
    try {
      const response = await dadJokeApi.get(); // a nifty little hack
      console.log(response);
      dadJoke.value = response.data.joke;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      dadJoke.value =
        "Something went wrong with the request! It really is a bad day :(";
    }
    console.log("Made dadJoke api call"); // always executed
    return dadJoke.value; // return dadJoke for promise chaining
  }
  return { dadJoke, getDadJoke };
}

export { dadJokeStuff };

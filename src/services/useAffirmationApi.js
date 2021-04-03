import { ref } from "vue";
import { affirmationApi } from "boot/axios";
function affirmationStuff() {
  const affirmation = ref("You are an awesome person");
  // Potentially create an ApiService: https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
  function getAffirmation() {
    affirmationApi
      .get("/affirmationapi") // a nifty little hack
      .then((response) => {
        console.log(response);
        affirmation.value = response.data.affirmation;
      })
      .catch((error) => {
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
        affirmation.value =
          "Something went wrong with the request! It really is a bad day :(";
      })
      .then(() => console.log("Made affirmation api call")); // always executed
  }
  return { affirmation, getAffirmation };
}

export { affirmationStuff };

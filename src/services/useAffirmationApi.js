import { ref } from "vue";
import { affirmationApi } from "boot/axios";
function affirmationStuff() {
  const affirmation = ref("");
  // Potentially create an ApiService: https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
  // Potentially pass in a reactive variable and assign to that as opposed to always using affirmation?
  async function getAffirmation() {
    affirmation.value = ""; // Used to trigger the skeleton animation...remove if unwanted
    try {
      const response = await affirmationApi.get("/affirmationapi"); // a nifty little hack
      console.log(response);
      affirmation.value = response.data.affirmation;
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
      affirmation.value =
        "Something went wrong with the request! It really is a bad day :(";
    }
    console.log("Made affirmation api call"); // always executed
    return affirmation.value; // return affirmation for promise chaining
  }
  // Without using async/await
  function getAffirmation2() {
    affirmation.value = ""; // Used to trigger the skeleton animation...remove if unwanted
    // If we do not return here we cannot "chain" promises to extract the value of affirmation and assign
    // it to something else
    return affirmationApi
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

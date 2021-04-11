import { ref } from "vue";
import { API } from "boot/amplify";
function lambdaStuff() {
  const apiName = "corsapi";
  const lambdaResp = ref(Object);
  // Potentially create an ApiService: https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
  // Potentially pass in a reactive variable and assign to that as opposed to always using lambdaResp?
  async function getLambdaResp() {
    lambdaResp.value = ""; // Used to trigger the skeleton animation...remove if unwanted
    try {
      const myInit = { body: { endpoint: "https://www.affirmations.dev" } };
      const resource = "/endpoint";
      const response = await API.post(apiName, resource, myInit); // a nifty little hack
      console.log(response);
      lambdaResp.value = response.affirmation;
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
      lambdaResp.value =
        "Something went wrong with the request! It really is a bad day :(";
    }
    console.log("Made lambdaResp api call"); // always executed
    return lambdaResp.value; // return lambdaResp for promise chaining
  }
  return { lambdaResp, getLambdaResp };
}

export { lambdaStuff };

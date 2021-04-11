// Configuring lambda functions: https://docs.amplify.aws/guides/functions/configuring-lambda/q/platform/js
// Accessing query/path/headers etc: https://stackoverflow.com/questions/31329958/how-to-pass-a-querystring-or-route-parameter-to-aws-lambda-from-amazon-api-gatew
// What is parameters.json: https://stackoverflow.com/questions/57658197/how-does-aws-amplify-cloudformation-parameter-json-work
// Add lambda layer to functions: https://docs.amplify.aws/cli/function/layers
// If you don't want to create a layer (say so you can continue doing local mocking of lambda functions), I think you
// can theoretically run npm install <my package> in the same folder as your index.js (src folder).
// I think this will get auto-bundled and zipped up by amplify.
// Something like this: https://stackoverflow.com/questions/48356841/how-can-i-use-axios-in-lambda
// REMEMBER TO UPDATE your .gitignore file for the npm_modules folder!
// A hack for testing functions is to invoke them with node: https://stackoverflow.com/questions/64958996/aws-amplify-mock-function

const axios = require("axios"); // for making api calls

exports.handler = async (event, context) => {
  // For now just hardcode "get" but make more flexible in future
  console.log("Event: ", event);
  let myResponse = null;
  let myHeaders = null;
  let proxyEndpoint = null;
  try {
    const myBody = JSON.parse(event.body);
    console.log("My Body: ", myBody);
    proxyEndpoint = myBody.endpoint; //optional chain proxy isn't available in nodejs 12!
    myHeaders = myBody.headers;
    console.log("Proxy Endpoint: ", proxyEndpoint);
    console.log("My Headers: ", myHeaders);
    const apiresp = await axios.get(proxyEndpoint, { headers: myHeaders });
    myResponse = apiresp.data;
    console.log("API response1: ", apiresp);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      myResponse = error.response;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      myResponse = error.request;
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Something bad happened!");
      if (proxyEndpoint == undefined) {
        myResponse = { message: "Please add your api as a path parameter" };
      } else if (myHeaders == undefined) {
        myResponse = {
          message: "Perhaps you needed to pass headers in your request?"
        };
      } else {
        myResponse = { message: "No clue why this blew up" };
      }
    }
  }
  // const body = {
  //   eventData: event,
  //   contextData: context,
  //   message: "Hello from lambda!",
  // };
  console.log("API response2: ", myResponse);
  // See https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-output-format
  // If the function output is of a different format, API Gateway returns a 502 Bad Gateway error response.
  const response = {
    statusCode: 200,
    isBase64Encoded: false,
    body: JSON.stringify(myResponse),
    headers: {
      "Access-Control-Allow-Origin": "*"
      // Consider putting https://main.du23tqvv025zb.amplifyapp.com after testing
      // "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
    }
  };
  console.log("My Lambda Response: ", response);
  return response;
};

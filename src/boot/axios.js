import { boot } from "quasar/wrappers";
import axios from "axios";

// I can set other api settings up here. See https://github.com/axios/axios#creating-an-instance
const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/chowerth/group-subpay/",
});
// The affirmation api does not allow CORS so the dev server will fail when doing api get requests
// A brilliant hack I came up with after 5 hours of research is using webPack's proxy config
// to look for a fake api resource and then remap that fake resource to the *true* api endpoint
// via the dev server so I get server to server communication and no CORS issues
// In my affirmations service I invoke "http://localhost:8080/affirmationapi"
// which is a completely bogus endpoint that normally would mean nothing!
// However, in quasar.conf.js I modify the devServer to proxy requests that target
// resource /affirmationapi...this triggers the proxy action where I rewrite the
// host (baseURL below) with the target I specify in the proxy. Then I rewrite the
// endpoint by removing the resource /affirmationapi since the real request is simply
// the root '/'. So now I get the real request https://www.affirmations.dev/ I was after
const affirmationApi = axios.create({
  // baseURL: "https://www.affirmations.dev/",
  // baseURL: "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/",
  baseURL: "http://localhost:8080/",
});
const dadJokeApi = axios.create({
  baseURL: "https://icanhazdadjoke.com/",
  headers: { Accept: "application/json" },
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, api, affirmationApi, dadJokeApi };

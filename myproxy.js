module.exports = [
  {
    path: "/affirmationapi",
    rule: {
      target: "https://www.affirmations.dev",
      changeOrigin: true,
      pathRewrite: {
        "^/affirmationapi": "", // remove the /affirmationapi because the true endpoint is simply '/'
      },
    },
  },
];
// https://github.com/http-party/node-http-proxy#options

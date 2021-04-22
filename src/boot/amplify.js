// import something here
// Use this boot file to reference any AWS API resources?
import Amplify, { API, Storage } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, ... } */) => {
  // something to do
};

export { API, Storage };

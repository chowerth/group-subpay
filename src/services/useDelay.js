// This service is used to simulate slow loads and rendering on pages
// It is particularly useful for testing skeleton templates
function delayStuff() {
  // Potentially create an ApiService: https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
  // Potentially change this to async/await syntactic sugar
  function setDelayFunc({
    delayProbability = 0.5,
    delayFunc = () => void 0, // https://stackoverflow.com/questions/1291942/what-does-javascriptvoid0-mean
    delayArgs = null,
    delayTime = 3000,
  }) {
    const doDelay = Math.random() <= delayProbability;
    const realFunc = delayArgs ? () => delayFunc(delayArgs) : () => delayFunc();
    var res;
    if (doDelay) {
      setTimeout(function () {
        res = realFunc();
      }, delayTime);
    } else {
      res = realFunc();
    }
    return res;
  }

  async function setDelayFuncAsync({
    delayProbability = 0.5,
    delayFunc = () => void 0, // https://stackoverflow.com/questions/1291942/what-does-javascriptvoid0-mean
    delayArgs = null,
    delayTime = 3000,
  }) {
    const doDelay = Math.random() <= delayProbability;
    const realFunc = delayArgs ? () => delayFunc(delayArgs) : () => delayFunc();
    var res;
    if (doDelay) {
      setTimeout(async function () {
        res = await realFunc();
      }, delayTime);
    } else {
      res = await realFunc();
    }
    return res;
  }
  return { setDelayFunc, setDelayFuncAsync };
}

export { delayStuff };

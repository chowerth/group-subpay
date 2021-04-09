<template>
  <div>
    <q-card class="q-pa-sm">
      <q-card-section
        class="text-h4 text-weight-bold text-center q-gutter-y-md"
      >
        {{ dadJoke }}
        <div v-if="!dadJoke">
          <q-skeleton type="text" />
          <q-skeleton type="text" />
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn @click="getDadJoke" color="primary" label="Get dad joke" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { dadJokeStuff } from "../services/useDadJokeApi.js";
import { delayStuff } from "../services/useDelay";

export default {
  name: "DadJoke",
  setup() {
    const { dadJoke, getDadJoke } = dadJokeStuff();
    const { setDelayFunc } = delayStuff();
    // There is no onBeforeCreated or onCreated for the Composition API
    // This is because inside the setup() method these events have already occurred
    // Typically you would put api calls in there but now we can just invoke them!
    setDelayFunc({
      delayProbability: 1,
      delayFunc: getDadJoke,
    });
    // I keep the code below to show an IIFE example: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    // You can use this to grab the return value of an async function
    // const mess = ref("");
    // (async function () {
    //   mess.value = await getdadJoke();
    // })();

    return { dadJoke, getDadJoke };
  },
};
</script>

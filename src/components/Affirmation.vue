<template>
  <div>
    <q-card class="q-pa-sm">
      <q-card-section
        class="text-h4 text-weight-bold text-center q-gutter-y-md"
      >
        {{ affirmation }}
        <div v-if="!affirmation">
          <q-skeleton type="text" />
          <q-skeleton type="text" />
        </div>
      </q-card-section>
      <q-card-section
        class="text-h4 text-weight-bold text-center q-gutter-y-md"
      >
        {{ lambdaResp }}
        <div v-if="!lambdaResp">
          <q-skeleton type="text" />
          <q-skeleton type="text" />
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn
          @click="getAffirmation"
          color="primary"
          label="Get Affirmation"
        />
        <q-btn
          @click="getLambdaResp"
          color="primary"
          label="Call Lambda Function"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { affirmationStuff } from "../services/useAffirmationApi";
import { delayStuff } from "../services/useDelay";
import { lambdaStuff } from "../services/useLambdaService";

export default {
  name: "Affirmation",
  setup() {
    const { affirmation, getAffirmation } = affirmationStuff();
    const { setDelayFunc } = delayStuff();
    const { lambdaResp, getLambdaResp } = lambdaStuff();
    // There is no onBeforeCreated or onCreated for the Composition API
    // This is because inside the setup() method these events have already occurred
    // Typically you would put api calls in there but now we can just invoke them!
    setDelayFunc({
      delayProbability: 1,
      delayFunc: getAffirmation
    });
    // I keep the code below to show an IIFE example: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    // You can use this to grab the return value of an async function
    // const mess = ref("");
    // (async function () {
    //   mess.value = await getAffirmation();
    // })();

    return { affirmation, getAffirmation, lambdaResp, getLambdaResp };
  }
};
</script>

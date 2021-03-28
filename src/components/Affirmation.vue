<template>
  <div>
    <q-btn @click="getAffirmation" color="primary" label="Get Affirmation" />
    <p>
      {{ affirmation }}
    </p>
  </div>
</template>

<script>
import { affirmationStuff } from "../services/useAffirmationApi";

export default {
  name: "Affirmation",
  setup() {
    // On load of component make Api call?
    // Display button to fetch more
    const { affirmation, getAffirmation } = affirmationStuff();
    return { affirmation, getAffirmation };
  },
};
</script>

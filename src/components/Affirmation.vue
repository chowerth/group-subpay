<template>
  <div>
    <q-card class="q-pa-sm">
      <q-card-section class="text-h4 text-weight-bold text-center">
        {{ affirmation }}
      </q-card-section>
      <q-card-actions>
        <q-btn
          @click="getAffirmation"
          color="primary"
          label="Get Affirmation"
        />
      </q-card-actions>
    </q-card>
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

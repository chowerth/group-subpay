<template>
  <q-page padding>
    <dad-joke></dad-joke>
  </q-page>
</template>

<script>
import DadJoke from "../components/DadJoke.vue";
export default {
  components: { DadJoke },
  name: "DadJokes",
};
</script>

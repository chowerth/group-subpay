<template>
  <q-btn-toggle
    v-model="groupSubpaySubmitOption"
    spread
    no-caps
    unelevated
    toggle-color="primary"
    color="white"
    text-color="primary"
    :options="formOptions"
  />
</template>

<script>
import { onUpdated } from "vue";
import { groupSubpayOptionStuff } from "../services/useForm";
export default {
  name: "GroupSubpayOptionsComponent",
  emits: ["subpayOptionEvent"],
  setup(props, { emit }) {
    const { groupSubpaySubmitOption, formOptions } = groupSubpayOptionStuff();

    // emitter helper function for this component
    function sendOptionData() {
      emit("subpayOptionEvent", groupSubpaySubmitOption.value);
    }
    // Question: Can I use "emit" in my javascript services or is it restricted to components only through
    // context and the setup() function?
    onUpdated(() => {
      sendOptionData();
    });

    sendOptionData();

    return { groupSubpaySubmitOption, formOptions };
  }
};
</script>

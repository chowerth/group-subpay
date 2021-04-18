<template>
  <!-- Look into using the mask prop as well -->
  <div class="row">
    <q-input
      class="col-xm-12 col-sm-6"
      debounce="500"
      outlined
      clearable
      hide-bottom-space
      type="text"
      v-model="employerInfo.name"
      label="Employer Name"
      lazy-rules
      :rules="employerNameRules"
    >
      <template #prepend>
        <q-icon name="business" color="primary" />
      </template>
    </q-input>

    <q-input
      class="col-xm-12 col-sm-6"
      debounce="500"
      outlined
      clearable
      hide-bottom-space
      type="text"
      v-model="employerInfo.address"
      label="Employer Address"
      lazy-rules
      :rules="employerAddressRules"
    >
      <template #prepend>
        <q-icon name="place" color="primary" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { onUpdated } from "vue";
import { employerSubpayStuff } from "../services/useForm";
export default {
  name: "EmployerSubpayComponent",
  emits: ["employerEvent"],
  setup(props, { emit }) {
    const {
      employerInfo,
      employerNameRules,
      employerAddressRules
    } = employerSubpayStuff();

    // emitter helper function for this component
    function sendEmployerData() {
      emit("employerEvent", employerInfo.value);
    }

    // This lifecycle hook seems to get called whenever any of the data in the child
    // components changes. I can debounce the child input components so they won't emit
    // events as often and thus this won't either to save cycles
    onUpdated(() => {
      sendEmployerData();
    });

    // Upon creation send the object data with the id
    sendEmployerData();

    return {
      employerInfo,
      employerNameRules,
      employerAddressRules
    };
  }
};
</script>

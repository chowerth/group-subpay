<template>
  <q-page padding>
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      done-color="green"
      animated
    >
      <q-step
        :name="1"
        title="Group subpay form1"
        icon="assignment"
        :done="step > 1"
      >
        A QForm will go here that will extract user input
      </q-step>

      <q-step
        :name="2"
        title="Group subpay form2"
        caption="Optional"
        icon="assignment"
        :done="step > 2"
      >
        Another form for input collection...
      </q-step>

      <q-step :name="3" title="Disabled example" icon="assignment" disable>
        This step won't show up because it is disabled.
      </q-step>

      <q-step :name="4" title="Finish form" icon="add_comment">
        Final form submission
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="nextForm($refs.stepper)"
            color="primary"
            :label="step === lastStep ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GroupSubpay",
  setup() {
    const lastStep = ref(4);
    const step = ref(1);
    function nextForm(QStepper) {
      QStepper.next();
    }
    return {
      lastStep,
      step,
      nextForm,
    };
  },
};
</script>

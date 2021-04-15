<template>
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
      <subpay-form-one></subpay-form-one>
    </q-step>

    <q-step
      :name="2"
      title="Group subpay form2"
      caption="Optional"
      icon="assignment"
      :done="step > 2"
    >
      <subpay-form-two></subpay-form-two>
    </q-step>

    <q-step :name="3" title="Disabled example" icon="assignment" disable>
      This step won't show up because it is disabled.
    </q-step>

    <q-step :name="4" title="Finish form" icon="add_comment">
      Final form submission...do something special for this one
    </q-step>

    <!-- Refactor this to component -->
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
</template>

<script>
import stepperStuff from "../services/useStepper";
import SubpayFormOne from "../components/SubpayFormOne.vue";
import SubpayFormTwo from "../components/SubpayFormTwo.vue";
export default {
  components: { SubpayFormOne, SubpayFormTwo },
  name: "FormStepper",
  setup() {
    const { lastStep, step, nextForm } = stepperStuff();
    return {
      lastStep,
      step,
      nextForm
    };
  }
};
</script>

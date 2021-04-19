<template>
  <!-- TODO: put 'refs' on each input -->
  <div class="row">
    <q-input
      class="col-xs-12 col-sm-3"
      debounce="500"
      outlined
      clearable
      hide-bottom-space
      type="text"
      v-model="employeeInfo.fullName"
      label="Full Employee Name"
      lazy-rules
      :rules="employeeNameRules"
    >
      <template #prepend>
        <q-icon name="person" color="primary" />
      </template>
    </q-input>

    <q-input
      class="col-xs-12 col-sm-3"
      debounce="500"
      outlined
      clearable
      hide-bottom-space
      type="text"
      v-model="employeeInfo.identifier"
      label="Employee SSN"
      mask="###-##-####"
      fill-mask="#"
      lazy-rules
      :rules="employeeIdentifierRules"
    >
      <template #prepend>
        <q-icon name="tag" color="primary" />
      </template>
    </q-input>

    <!-- TODO: Play around with select more...it has a TON of options -->
    <!-- The user must select an option...if they don't it gives me the array back -->
    <q-select
      class="col-xs-12 col-sm-3"
      outlined
      v-model="employeeInfo.moneySource"
      :options="moneySourceOptions"
      label="Money Source"
    >
      <template #prepend>
        <q-icon name="account_balance" color="primary" />
      </template>
    </q-select>

    <q-input
      class="col-xs-12 col-sm-3"
      debounce="500"
      outlined
      clearable
      v-model="employeeInfo.amount"
      label="Amount Of Money For Source"
      mask="#.##"
      fill-mask="0"
      reverse-fill-mask
      :rules="employeeAmountRules"
    >
      <template #prepend>
        <q-icon name="attach_money" color="primary" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { onUpdated } from "vue";
import { employeeSubpayStuff } from "../services/useForm";
export default {
  name: "EmployeeSubpayComponent",
  props: {
    subpayId: {
      type: Number,
      required: true
    }
  },
  // https://v3.vuejs.org/api/options-data.html#emits
  // TODO: Work on adding validation to event later
  emits: ["employeeEvent"],
  setup(props, { emit }) {
    const {
      employeeInfo,
      employeeNameRules,
      employeeIdentifierRules,
      employeeAmountRules,
      moneySourceOptions
    } = employeeSubpayStuff();

    // emitter helper function for this component
    function sendEmployeeData() {
      const newData = Object.assign({ id: props.subpayId }, employeeInfo.value);
      emit("employeeEvent", newData);
    }

    // This lifecycle hook seems to get called whenever any of the data in the child
    // components changes. I can debounce the child input components so they won't emit
    // events as often and thus this won't either to save cycles
    onUpdated(() => {
      sendEmployeeData();
    });

    // Upon creation send the object data with the id
    sendEmployeeData();

    return {
      employeeInfo,
      employeeNameRules,
      employeeIdentifierRules,
      employeeAmountRules,
      moneySourceOptions,
      sendEmployeeData
    };
  }
};
</script>

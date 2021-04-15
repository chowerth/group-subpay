<template>
  <!-- TODO: put 'refs' on each input -->
  <div class="row">
    <q-input
      class="col"
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
        <q-icon name="business" color="primary" />
      </template>
    </q-input>

    <q-input
      class="col"
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
    <q-select
      class="col"
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
      class="col"
      outlined
      clearable
      v-model="employeeInfo.amount"
      label="Amount Of Money For Source"
      mask="#.##"
      fill-mask="0"
      reverse-fill-mask
    >
      <template #prepend>
        <q-icon name="attach_money" color="primary" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { employeeSubpayStuff } from "../services/useForm";
export default {
  name: "EmployeeSubpayComponent",
  setup() {
    const {
      employeeInfo,
      employeeNameRules,
      employeeIdentifierRules,
      moneySourceOptions,
      buildEmployee
    } = employeeSubpayStuff();
    return {
      employeeInfo,
      employeeNameRules,
      employeeIdentifierRules,
      moneySourceOptions,
      buildEmployee
    };
  }
};
</script>

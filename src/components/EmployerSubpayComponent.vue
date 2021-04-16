<template>
  <!-- Look into using the mask prop as well -->
  <div class="row">
    <q-input
      class="col-xm-12 col-sm-6"
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
        <q-icon name="person" color="primary" />
      </template>
    </q-input>

    <q-input
      class="col-xm-12 col-sm-6"
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
import { employerSubpayStuff } from "../services/useForm";
export default {
  name: "EmployerSubpayComponent",
  setup() {
    const {
      employerInfo,
      employerNameRules,
      employerAddressRules,
      buildEmployer
    } = employerSubpayStuff();
    return {
      employerInfo,
      employerNameRules,
      employerAddressRules,
      buildEmployer
    };
  }
};
</script>

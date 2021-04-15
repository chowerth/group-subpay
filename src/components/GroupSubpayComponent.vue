<template>
  <div>
    <q-card class="q-pa-md">
      <div class="text-h5">Group Subpay Form</div>
      <q-card-section>
        <employer-subpay-component></employer-subpay-component>
      </q-card-section>
      <q-card-section v-for="n in 3" :key="n">
        <employee-subpay-component></employee-subpay-component>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import EmployeeSubpayComponent from "./EmployeeSubpayComponent.vue";
import EmployerSubpayComponent from "./EmployerSubpayComponent.vue";
export default {
  components: { EmployerSubpayComponent, EmployeeSubpayComponent },
  name: "GroupSubpayComponent",
  setup() {
    return {};
  }
};
</script>

<template>
  <q-page padding>
    <div v-for="n in 1" :key="n">
      <employer-subpay-component></employer-subpay-component>
      <employee-subpay-component></employee-subpay-component>
    </div>
  </q-page>
</template>

<script>
import EmployeeSubpayComponent from "../components/EmployeeSubpayComponent.vue";
import EmployerSubpayComponent from "../components/EmployerSubpayComponent.vue";

export default {
  components: { EmployerSubpayComponent, EmployeeSubpayComponent },
  name: "GroupSubpay"
};
</script>

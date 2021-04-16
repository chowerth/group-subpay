<template>
  <div>
    <q-form @submit="groupSubpaySubmit" @reset="groupSubpayReset">
      <q-card class="q-pa-md">
        <div class="text-h5">Group Subpay Form</div>
        <q-card-section>
          <employer-subpay-component></employer-subpay-component>
          <q-input
            outlined
            debounce="500"
            v-model.number="numberOfSubpays"
            type="number"
            label="Number Of Subpays"
            :rules="numberOfSubpaysRules"
          />
        </q-card-section>
        <!-- NOTE: There is a quirk with VueJS were if you just render the number ref it treats it like a string -->
        <!-- You either need to do parseInt(numberOfSubpays) or use a computed property -->
        <!-- There must be a better way to tell Vue it's an integer...maybe TypeScript support -->
        <q-card-section v-for="n in computeNumberOfSubpays" :key="n">
          <employee-subpay-component></employee-subpay-component>
        </q-card-section>
        <q-card-section>
          <div>
            <q-btn label="Submit Group Subpay" type="submit" color="primary" />
            <q-btn
              label="Reset Form"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-form>
  </div>
</template>

<script>
import EmployeeSubpayComponent from "./EmployeeSubpayComponent.vue";
import EmployerSubpayComponent from "./EmployerSubpayComponent.vue";
import { groupSubpayStuff } from "../services/useForm";
export default {
  components: { EmployerSubpayComponent, EmployeeSubpayComponent },
  name: "GroupSubpayComponent",
  setup() {
    const {
      numberOfSubpays,
      numberOfSubpaysRules,
      computeNumberOfSubpays,
      groupSubpaySubmit,
      groupSubpayReset
    } = groupSubpayStuff();
    return {
      numberOfSubpays,
      numberOfSubpaysRules,
      computeNumberOfSubpays,
      groupSubpaySubmit,
      groupSubpayReset
    };
  }
};
</script>

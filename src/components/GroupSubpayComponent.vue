<template>
  <div>
    <group-subpay-options-component
      @subpayOptionEvent="getSubpayOption"
    ></group-subpay-options-component>
    <q-form
      v-if="subpayOption === 'form'"
      @submit="groupSubpaySubmit"
      @reset="groupSubpayReset"
    >
      <q-card class="q-pa-md">
        <div class="text-h5">Group Subpay Form</div>
        <q-card-section>
          <employer-subpay-component
            @employerEvent="getEmployerData"
          ></employer-subpay-component>
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
          <employee-subpay-component
            :subpayId="n"
            @employeeEvent="getEmployeeData"
          ></employee-subpay-component>
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
    <q-form
      v-if="subpayOption === 'spreadsheet'"
      @submit="groupSubpaySubmit"
      @reset="groupSubpayReset"
    >
      <file-upload></file-upload>
    </q-form>
  </div>
</template>

<script>
import EmployeeSubpayComponent from "./EmployeeSubpayComponent.vue";
import EmployerSubpayComponent from "./EmployerSubpayComponent.vue";
import { groupSubpayStuff } from "../services/useForm";
import GroupSubpayOptionsComponent from "./GroupSubpayOptionsComponent.vue";
import FileUpload from "./FileUpload.vue";
export default {
  components: {
    EmployerSubpayComponent,
    EmployeeSubpayComponent,
    GroupSubpayOptionsComponent,
    FileUpload
  },
  name: "GroupSubpayComponent",
  setup(props, context) {
    // TODO: print attributes to see what they are
    // console.log("Attributes: ", context.attrs);
    const {
      subpayOption,
      numberOfSubpays,
      numberOfSubpaysRules,
      computeNumberOfSubpays,
      groupSubpaySubmit,
      groupSubpayReset,
      getEmployeeData,
      getEmployerData,
      getSubpayOption
    } = groupSubpayStuff();
    return {
      subpayOption,
      numberOfSubpays,
      numberOfSubpaysRules,
      computeNumberOfSubpays,
      groupSubpaySubmit,
      groupSubpayReset,
      getEmployeeData,
      getEmployerData,
      getSubpayOption
    };
  }
};
</script>

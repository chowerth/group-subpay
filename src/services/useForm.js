// The intent is to put all user form data and functionality here
// Perhaps I should separate this into different services but we'll see how this goes
// Use named exports to facilitate this
import { ref } from "vue";
import { useQuasar } from "quasar";

function employerSubpayStuff() {
  const employerInfo = ref({
    name: "Nationwide",
    address: "One Nationwide Plaza Columbus, OH"
  });

  const employerNameRules = [
    val => (val && val.length > 0) || "Please enter a valid employer"
  ];
  const employerAddressRules = [
    val => (val && val.length > 0) || "Please enter a valid employer address"
  ];

  function buildEmployer(employerObject) {
    const { name, address } = employerObject;
    employerInfo.value.name = name;
    employerInfo.value.address = address;
    return employerInfo;
  }
  return {
    employerInfo,
    employerNameRules,
    employerAddressRules,
    buildEmployer
  };
}

function employeeSubpayStuff() {
  const employeeInfo = ref({
    fullName: "Chris L. Howerth",
    identifier: "12-345-6789",
    moneySource: ["Employer Contribution"],
    amount: 250
  });

  // TODO: fix this so they are required to enter at least 2 substrings (first, last) but no more than 3 (middle)
  // use regular expression?
  // let re = \d{2}-\d{3}-\d{4}\
  const employeeNameRules = [
    val => (val && val.length > 0) || "Please enter an employee name"
  ];

  // TODO: fix so validates 3 groups of numbers separated by -
  // use regular expression?
  const employeeIdentifierRules = [
    val =>
      (val && val.length === 11) ||
      `The SSN must be 9 digits. It is ${val.length}`
    // val =>
    //   /\d{2}-\d{3}-\d{4}/.test(val) ||
    //   `The SSN does not have the correct format. It is ${val}`
  ];

  const moneySourceOptions = [
    "Employer Contribution",
    "Employee Contribution",
    "Traditional IRA",
    "ROTH IRA"
  ];

  function buildEmployee(employeeObject) {
    const { fullName, identifier, moneySource, amount } = employeeObject;
    employeeInfo.value.fullName = fullName;
    employeeInfo.value.identifier = identifier;
    employeeInfo.value.moneySource = moneySource;
    employeeInfo.value.amount = amount;
    return emploeeInfo;
  }
  return {
    employeeInfo,
    employeeNameRules,
    employeeIdentifierRules,
    moneySourceOptions,
    buildEmployee
  };
}

function formOneStuff() {
  function onSubmit() {
    if (accept.value !== true) {
      $q.notify({
        progress: true,
        // progressClass: "notifyProgress",
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the license and terms first"
      });
    } else {
      $q.notify({
        progress: true,
        // progressClass: "notifyProgress",
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
    }
  }
  function onReset() {
    name.value = null;
    age.value = null;
    accept.value = false;
  }

  const $q = useQuasar();
  const name = ref(null);
  const age = ref(null);
  const accept = ref(false);
  return { name, age, accept, onSubmit, onReset };
}

function formTwoStuff() {
  function onSubmit() {
    if (accept.value !== true) {
      $q.notify({
        progress: true,
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the license and terms first"
      });
    } else {
      $q.notify({
        progress: true,
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
    }
  }
  function onReset() {
    brightness.value = 2;
    accept.value = false;
  }

  const $q = useQuasar();
  const brightness = ref(2);
  const accept = ref(false);
  return { brightness, accept, onSubmit, onReset };
}

export { formOneStuff, formTwoStuff, employerSubpayStuff, employeeSubpayStuff };

// The intent is to put all user form data and functionality here
// Perhaps I should separate this into different services but we'll see how this goes
// Use named exports to facilitate this
import { ref, computed } from "vue";
import { uid, useQuasar } from "quasar";
import { Storage } from "boot/amplify";

function displayInvoices() {
  const invoiceList = ref([]);
  const $q = useQuasar();

  async function getInvoices() {
    try {
      invoiceList.value = await Storage.list("");
      // console.log("INVOICES = ", invoiceList.value);
    } catch (err) {
      console.log(err);
    }
  }

  async function presentInvoice(eventData) {
    // console.log(eventData.target.innerText);
    const bucketKey = eventData.target.innerText;
    console.log(bucketKey);
    const result = await Storage.get(bucketKey, { download: true });
    console.log("result = ", result);
    const groupSubpayText = await result.Body.text();
    console.log(groupSubpayText);
    showSubpay(groupSubpayText);
  }

  function showSubpay(groupSubpay) {
    $q.dialog({
      title: "Group Subpay Information",
      message: groupSubpay
    })
      .onOk(() => {
        // console.log('OK')
      })
      .onCancel(() => {
        // console.log('Cancel')
      })
      .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      });
  }

  return { invoiceList, getInvoices, presentInvoice };
}

function groupSubpayOptionStuff() {
  const formOptions = [
    { label: "Form Input", value: "form" },
    { label: "Spreadsheet Upload", value: "spreadsheet" },
    { label: "Invoices", value: "invoices" }
  ];
  const groupSubpaySubmitOption = ref(formOptions[0].value);

  return { groupSubpaySubmitOption, formOptions };
}

function groupSubpayStuff() {
  const numberOfSubpays = ref(1);
  // const groupSubpay = ref({});
  const employer = ref({});
  const employeeList = ref([]);
  const subpayOption = ref("");
  const $q = useQuasar();

  const computeNumberOfSubpays = computed(() => {
    numberOfSubpays.value =
      numberOfSubpays.value < 1 ? 1 : numberOfSubpays.value;

    // Resize array with undefined values every time
    employeeList.value.length = numberOfSubpays.value;

    return numberOfSubpays.value;
  });

  const numberOfSubpaysRules = [
    val => (val && val > 0) || "Please enter at least one subpay",
    val => Number.isInteger(val) || "Please enter an integer"
  ];

  function groupSubpaySubmit() {
    // Save the group subpay to s3?
    const uuid = uid();
    const data = {
      id: uuid, // give item a unique id
      employer: employer.value,
      employeeList: employeeList.value
    };
    console.log("Group Subpay: ", data);
    console.log("Submitted Group Subpay");

    // // log this stuff to amplify storage S3

    (async function() {
      try {
        const s3result = await Storage.put(uuid, data);
        console.log(s3result);
      } catch (err) {
        console.log(err);
      }
    })();

    $q.notify({
      progress: true,
      color: "positive",
      textColor: "white",
      icon: "done",
      message: `Submitted group subpay. Your confirmation ID is: ${uuid}`
    });
  }

  // TODO: I need to manuall call the reset on each component somehow
  function groupSubpayReset() {
    console.log("Reset Group Subpay");
  }

  // TODO: Perhaps don't put objects but instead plain JSON in list? Or not?
  function getEmployeeData(eventData) {
    // console.log("event data: ", eventData);
    const { id } = eventData;
    // javascript is 0 indexed
    const idx = id - 1;
    employeeList.value[idx] = eventData;
  }

  function getEmployerData(eventData) {
    employer.value = eventData;
  }

  function getSubpayOption(eventData) {
    subpayOption.value = eventData;
    // console.log("Option = ", subpayOption.value);
  }

  return {
    numberOfSubpays,
    employeeList,
    subpayOption,
    numberOfSubpaysRules,
    computeNumberOfSubpays,
    groupSubpaySubmit,
    groupSubpayReset,
    getEmployeeData,
    getEmployerData,
    getSubpayOption
  };
}

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
    return employerInfo.value;
  }
  return {
    employerInfo,
    employerNameRules,
    employerAddressRules,
    buildEmployer
  };
}

function employeeSubpayStuff() {
  const moneySourceOptions = [
    "Employer Contribution",
    "Employee Contribution",
    "Traditional IRA",
    "ROTH IRA"
  ];
  const employeeInfo = ref({
    fullName: "Chris L. Howerth",
    identifier: "12-345-6789",
    moneySource: moneySourceOptions[0],
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
    val => (val && !val.includes("#")) || "The SSN must be 9 digits."
    // val =>
    //   /\d{2}-\d{3}-\d{4}/.test(val) ||
    //   `The SSN does not have the correct format. It is ${val}`
  ];

  const employeeAmountRules = [
    val => (val && val > 0) || "Please enter a positive amount"
  ];

  function buildEmployee(employeeObject) {
    const { fullName, identifier, moneySource, amount } = employeeObject;
    employeeInfo.value.fullName = fullName;
    employeeInfo.value.identifier = identifier;
    employeeInfo.value.moneySource = moneySource;
    employeeInfo.value.amount = amount;
    return emploeeInfo.value;
  }

  return {
    employeeInfo,
    employeeNameRules,
    employeeIdentifierRules,
    employeeAmountRules,
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

export {
  displayInvoices,
  formOneStuff,
  formTwoStuff,
  employerSubpayStuff,
  employeeSubpayStuff,
  groupSubpayStuff,
  groupSubpayOptionStuff
};

// The intent is to put all user form data and functionality here
// Perhaps I should separate this into different services but we'll see how this goes
// Use named exports to facilitate this
import { ref } from "vue";
import { useQuasar } from "quasar";

function groupSubpayStuff() {
  // group subpays are arrays of subpay objects
  // a subpay object has an employer object and an employee list
  // an amployee list contains details of every employee under that employer
  const groupSubpay = ref([
    {
      company: "Nationwide",
      address: "One Nationwide Plaza Columbus, OH"
    },
    [
      {
        firstName: "Chris",
        lastName: "Howerth",
        SSN: "123456789",
        source: "Employee contribution",
        amount: 1000
      },
      {
        firstName: "Chris",
        lastName: "Howerth",
        SSN: "123456789",
        source: "Employer contribution",
        amount: 300
      },
      {
        firstName: "Tony",
        lastName: "Thephason",
        SSN: "112233445",
        source: "Employee contribution",
        amount: 2500
      },
      {
        firstName: "Tony",
        lastName: "Thephason",
        SSN: "112233445",
        source: "Employer contribution",
        amount: 650
      }
    ]
  ]);
  return { groupSubpay };
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

export { formOneStuff, formTwoStuff, groupSubpayStuff };

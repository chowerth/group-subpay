// The intent is to put all user form data and functionality here
// Perhaps I should separate this into different services but we'll see how this goes
// Use named exports to facilitate this
import { ref } from "vue";
import { useQuasar } from "quasar";
function formOneStuff() {
  function onSubmit() {
    if (accept.value !== true) {
      $q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the license and terms first",
      });
    } else {
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
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
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "You need to accept the license and terms first",
      });
    } else {
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
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

export { formOneStuff, formTwoStuff };

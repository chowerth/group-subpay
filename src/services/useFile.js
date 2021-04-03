import { ref, computed } from "vue";
import { useQuasar } from "quasar";
function fileStuff() {
  const $q = useQuasar();
  const file = ref(null); //files must *always* be initialized to null
  const fileText = ref(""); //this holds the async value of the text file

  // You cannot "return" a value from an async function
  function updateFile(newFile) {
    // console.log(newFile);
    newFile
      // ?.text() // I should not need this since the API "guarantees" it gives me the updates file
      .text()
      .then((text) => {
        console.log(text);
        fileText.value = text;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => console.log("File upload invoked")); // always executed
  }
  function onRejected(rejectedEntries) {
    $q.notify({
      type: "negative",
      message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
    });
  }
  return { file, onRejected, fileText, updateFile };
}
export { fileStuff };

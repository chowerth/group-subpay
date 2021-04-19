import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import * as XLSX from "xlsx";

function fileStuff() {
  const $q = useQuasar();
  const file = ref(null); //files must *always* be initialized to null
  const fileText = ref(null); //this holds the async value of the text file

  // https://www.ayobamiadewole.com/Blog/Importing-Excel-File-with-SheetJs
  // https://github.com/SheetJS/sheetjs
  function updateFile(newFile) {
    newFile
      // ?.text() // I should not need this since the API "guarantees" it gives me the updates file
      // .text()
      .arrayBuffer()
      .then(text => {
        const workbook = XLSX.read(text, { type: "buffer" });
        console.log(workbook);
        const jsonSheets = [];
        Object.values(workbook.Sheets).forEach(sheet => {
          const sheetJSON = XLSX.utils.sheet_to_json(sheet);
          jsonSheets.push(sheetJSON);
        });
        fileText.value = jsonSheets;
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => console.log("File upload invoked")); // always executed
  }
  function onRejected(rejectedEntries) {
    $q.notify({
      type: "negative",
      message: `${rejectedEntries.length} file(s) did not pass validation constraints`
    });
  }
  return { file, onRejected, fileText, updateFile };
}
export { fileStuff };

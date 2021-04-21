import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import * as XLSX from "xlsx";

function fileStuff() {
  const $q = useQuasar();
  const file = ref(null); //files must *always* be initialized to null
  const fileData = ref([]); //this holds the async value of the text file

  // this is our column definition
  const columns = [
    {
      name: "Employer Name",
      required: true,
      label: "Employer Name",
      align: "left",
      field: row => row["Employer Name"],
      format: val => `${val}`,
      sortable: true
    },
    {
      name: "Employer Address",
      align: "left",
      label: "Employer Address",
      field: row => row["Address"]
    },
    {
      name: "Full Employee Name",
      align: "left",
      label: "Full Employee Name",
      field: row => row["Employee Name"]
    },
    {
      name: "Employee Identifier",
      align: "left",
      label: "Employee Identifier",
      field: row => row["Employee Identifier"]
    },
    {
      name: "Money Source",
      align: "left",
      label: "Money Source",
      // field: "Money Source"
      field: row => row["Money Source"]
    },
    {
      name: "Amount",
      align: "left",
      // label: "Amount", --> this also works
      field: row => row["Amount"]
    }
  ];

  // this is where our records go
  const rows = [];

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
        fileData.value = jsonSheets.flat(); // flatten array to display in table
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
  return { file, columns, rows, onRejected, fileData, updateFile };
}
export { fileStuff };

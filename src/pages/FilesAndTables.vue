<template>
  <q-page padding>
    <file-upload>
      <!-- <div>Placeholder here</div> -->
    </file-upload>
  </q-page>
</template>

<script>
import FileUpload from "../components/FileUpload.vue";
// import TableDisplay from "../components/TableDisplay.vue";
export default {
  components: { FileUpload },
  name: "FilesAndTables"
};
</script>

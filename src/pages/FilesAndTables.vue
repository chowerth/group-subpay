<template>
  <q-page padding>
    <file-upload></file-upload>
  </q-page>
</template>

<script>
import FileUpload from "../components/FileUpload.vue";
export default {
  components: { FileUpload },
  name: "FilesAndTables",
};
</script>

<template>
  <div>
    <q-card class="q-pa-sm">
      <q-card-section class="text-h6 text-weight-bold text-center">
        <q-table
          title="Subpays"
          :rows="fileData"
          :columns="columns"
          row-key="name"
        />
      </q-card-section>
      <!-- <q-card-section>
        <pre>{{ fileData }}</pre>
      </q-card-section> -->
      <q-card-actions align="around">
        <q-file
          v-model="file"
          label="Upload Group Subpay file"
          filled
          use-chips
          style="max-width: 300px"
          accept=".xlsx"
          max-file-size="1048576"
          max-files="1"
          @rejected="onRejected"
          @update:model-value="updateFile"
        />

        <q-btn label="Submit Group Subpay" type="submit" color="primary" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { fileStuff } from "../services/useFile";

export default {
  name: "FileUpload",
  setup() {
    const {
      file,
      columns,
      rows,
      onRejected,
      fileData,
      updateFile
    } = fileStuff();
    return { file, columns, rows, onRejected, fileData, updateFile };
  }
};
</script>

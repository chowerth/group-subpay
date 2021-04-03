<template>
  <div>
    <q-card class="q-pa-sm">
      <q-card-section class="text-h6 text-weight-bold text-center">
        {{ fileText }}
      </q-card-section>
      <q-card-actions>
        <q-file
          v-model="file"
          label="Upload Group Subpay file"
          filled
          use-chips
          style="max-width: 300px"
          accept=".json"
          max-file-size="1048576"
          max-files="1"
          @rejected="onRejected"
          @update:model-value="updateFile"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { fileStuff } from "../services/useFile";

export default {
  name: "FileUpload",
  setup() {
    const { file, onRejected, fileText, updateFile } = fileStuff();
    return { file, onRejected, fileText, updateFile };
  },
};
</script>

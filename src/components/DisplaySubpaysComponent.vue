<template>
  <q-card class="q-pa-md">
    <div class="text-h5">Your Invoices</div>
    <q-list bordered separator>
      <div v-if="invoiceList.length === 0">
        <q-skeleton type="text" />
        <q-skeleton type="text" />
      </div>
      <q-item
        @click="presentInvoice"
        v-for="invoice in invoiceList"
        :key="invoice.key"
        clickable
        v-ripple
      >
        <q-item-section>{{ invoice.key }}</q-item-section>
        <q-item-section
          >Last Modified: {{ invoice.lastModified }}</q-item-section
        >
      </q-item>
    </q-list>
  </q-card>
</template>

<script>
import { onUpdated } from "vue";
import { displayInvoices } from "../services/useForm";
export default {
  name: "DisplaySubpaysComponent",
  setup() {
    const { invoiceList, getInvoices, presentInvoice } = displayInvoices();

    onUpdated(() => {
      console.log();
      getInvoices();
    });

    getInvoices();

    return { invoiceList, getInvoices, presentInvoice };
  }
};
</script>

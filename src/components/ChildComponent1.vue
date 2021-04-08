<template>
  <div>
    <q-card class="q-pa-sm">
      <q-card-section class="text-h3 text-center">
        {{ componentName }}
      </q-card-section>
      <q-card-section class="text-body1 text-center q-gutter-y-md">
        {{ childComponentMessage }}
      </q-card-section>
      <q-card-section class="text-body1 text-center q-gutter-y-md">
        <slot></slot>
      </q-card-section>
      <q-card-section
        class="text-h6 text-weight-bold text-center q-gutter-y-md"
      >
        {{ 'I sent "' + child1Message + '" to child2' }}
      </q-card-section>
      <q-card-section
        class="text-h6 text-weight-bold text-center q-gutter-y-md"
      >
        {{ 'I received "' + childMessage + '" from child2' }}
      </q-card-section>
      <q-card-actions>
        <q-btn
          @click="handleChild1Update"
          color="primary"
          label="Send Affirmation To Child 2"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { child1Stuff } from "../services/useChild1Service";

export default {
  name: "ChildComponent1",
  props: {
    childComponentMessage: {
      type: String,
      required: true,
    },
    componentName: {
      type: String,
      required: true,
    },
    childMessage: {
      type: String,
      required: true,
    },
  },
  emits: ["child1Event"],
  // you can destructure emit from context like { emit }.
  // Normally you would pass context and reference would be context.emit
  setup(props, { emit }) {
    const { child1Message, sendMessage } = child1Stuff();

    // Emit events from the component, not the JS service. This forces us to write a wrapper function
    // and return a promise from the JS function to emit values to the parent
    async function handleChild1Update() {
      try {
        const message = await sendMessage();
        emit("child1Event", message);
      } catch (err) {
        console.log(err);
      }
    }

    return { child1Message, sendMessage, handleChild1Update };
  },
};
</script>

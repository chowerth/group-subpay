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
        {{ 'I sent "' + child2Message + '" to child1' }}
      </q-card-section>
      <q-card-section
        class="text-h6 text-weight-bold text-center q-gutter-y-md"
      >
        {{ 'I received "' + childMessage + '" from child1' }}
      </q-card-section>
      <q-card-actions>
        <q-btn
          @click="handleChild2Update"
          color="primary"
          label="Send Affirmation To Child 1"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { child2Stuff } from "../services/useChild2Service";
export default {
  name: "ChildComponent2",
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
  emits: ["child2Event"],
  setup(props, { emit }) {
    const { child2Message, sendMessage } = child2Stuff();

    async function handleChild2Update() {
      try {
        const message = await sendMessage();
        emit("child2Event", message);
      } catch (err) {
        console.log(err);
      }
    }

    return { child2Message, sendMessage, handleChild2Update };
  },
};
</script>

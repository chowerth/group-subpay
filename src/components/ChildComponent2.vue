<template>
  <div>
    <q-card class="q-pa-sm">
      <q-card-section class="text-h3 text-center">
        {{ componentName }}
      </q-card-section>
      <q-card-section class="text-body1 text-center q-gutter-y-md">
        {{ staticMessage }}
      </q-card-section>
      <q-card-section class="text-body1 text-center q-gutter-y-md">
        <slot></slot>
      </q-card-section>
      <q-card-section
        class="text-h6 text-weight-bold text-center q-gutter-y-md"
      >
        {{ 'I sent "' + sentMessage + '" to child1' }}
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
          label="Send Message To Child 1"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { childStuff } from "../services/useChildService";
export default {
  name: "ChildComponent2",
  props: {
    staticMessage: {
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
    const { sentMessage, sendMessage } = childStuff();

    async function handleChild2Update() {
      try {
        const message = await sendMessage();
        emit("child2Event", message);
      } catch (err) {
        console.log(err);
      }
    }

    return { sentMessage, sendMessage, handleChild2Update };
  },
};
</script>

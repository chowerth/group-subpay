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
        {{ 'I sent "' + sentMessage + '" to child2' }}
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
          label="Send Message To Child 2"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { childStuff } from "../services/useChildService";

export default {
  name: "ChildComponent1",
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
  // Unfortunately dynamic emits are not possible in Vue 3: https://github.com/vuejs/rfcs/issues/204
  // Maybe I'll figure out a better way later
  // emits: [componentName + "Event"],
  // you can destructure emit from context like { emit }.
  // Normally you would pass context and reference would be context.emit
  setup(props, { emit }) {
    const { sentMessage, sendMessage } = childStuff();

    // Emit events from the component, not the JS service. This forces us to write a wrapper function
    // and return a promise from the JS function to emit values to the parent
    async function handleChild1Update() {
      try {
        const message = await sendMessage();
        // emit("child1Event", message);
        emit(props.componentName + "Event", message); //get the prop to emit event
      } catch (err) {
        console.log(err);
      }
    }

    return { sentMessage, sendMessage, handleChild1Update };
  },
};
</script>

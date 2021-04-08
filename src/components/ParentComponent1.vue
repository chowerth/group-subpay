<template>
  <div>
    <!-- I could put this in a v-for loop to render but that would look too complicated -->
    <child-component-1
      childComponentMessage="This is a static message sent to child 1. This means I won't ever change."
      :componentName="childrenNames[0]"
      @child1Event="sendToChild2"
      :childMessage="messageFromChild2"
    >
      {{ "This message goes in " + childrenNames[0] + " slot" }}
    </child-component-1>

    <child-component-2
      childComponentMessage="This is a static message sent to child 2. This means I won't ever change."
      :componentName="childrenNames[1]"
      @child2Event="sendToChild1"
      :childMessage="messageFromChild1"
    >
      {{ "This message goes in " + childrenNames[1] + " slot" }}
    </child-component-2>
  </div>
</template>

<script>
// While these two child components are essentially identical and we could reuse much of their code,
// the point of this demonstration is to show that these components can be whatever we want
import ChildComponent1 from "../components/ChildComponent1.vue";
import ChildComponent2 from "../components/ChildComponent2.vue";
import { parent1Stuff } from "../services/useParent1Service";

export default {
  name: "ParentComponent1",
  components: { ChildComponent1, ChildComponent2 },
  setup() {
    const {
      childrenNames,
      sendToChild1,
      sendToChild2,
      messageFromChild1,
      messageFromChild2,
    } = parent1Stuff();
    return {
      childrenNames,
      sendToChild1,
      sendToChild2,
      messageFromChild1,
      messageFromChild2,
    };
  },
};
</script>

import { ref } from "vue";
function parent1Stuff() {
  const childrenNames = ref(["child1", "child2"]);
  const messageFromChild1 = ref("");
  const messageFromChild2 = ref("");

  function sendToChild2(event) {
    console.log("In parent message to child2: ", event);
    messageFromChild1.value = event;
  }
  function sendToChild1(event) {
    console.log("In parent message to child1: ", event);
    messageFromChild2.value = event;
  }

  return {
    childrenNames,
    messageFromChild1,
    messageFromChild2,
    sendToChild2,
    sendToChild1,
  };
}
export { parent1Stuff };

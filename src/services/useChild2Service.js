import { ref } from "vue";
import { affirmationStuff } from "./useAffirmationApi";
function child2Stuff() {
  const child2Message = ref("");
  const { affirmation, getAffirmation } = affirmationStuff();

  // Invoke the affirmation service to get a nice message that child 1 will send to someone
  // All I/O should be async
  async function sendMessage() {
    // Remember, since affirmation is a promise, we have no way to properly assign it outside of the promise structure
    // If we want to access child1Message in the calling function we must **return** (or resolve in Promise parlance)
    // the child1Message value
    child2Message.value = await getAffirmation();
    return child2Message.value;
  }
  return { child2Message, sendMessage };
}

export { child2Stuff };

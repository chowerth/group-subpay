import { ref } from "vue";
import { affirmationStuff } from "./useAffirmationApi";
function child1Stuff() {
  const child1Message = ref("");

  const { getAffirmation } = affirmationStuff(); // notice how I don't need affirmation here from the service

  // Invoke the affirmation service to get a nice message that child 1 will send to someone
  // All I/O should be async
  async function sendMessage() {
    // Remember, since affirmation is a promise, we have no way to properly assign it outside of the promise structure
    // If we want to access child1Message in the calling function we must **return** (or resolve in Promise parlance)
    // the child1Message value
    child1Message.value = await getAffirmation();
    return child1Message.value;
  }

  return { child1Message, sendMessage };
}

export { child1Stuff };

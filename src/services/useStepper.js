import { ref } from "vue";
export default function stepperStuff() {
  const lastStep = ref(4);
  const step = ref(1);
  function nextForm(QStepper) {
    QStepper.next();
  }
  return { lastStep, step, nextForm };
}

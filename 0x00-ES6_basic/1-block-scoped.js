export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // block scoped variable
    task2 = false; // block scoped variable
  }

  return [task, task2];
}

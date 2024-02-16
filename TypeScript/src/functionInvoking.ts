import { identity } from "./Generics";

function exaft1sec(fn: () => void) {
  setTimeout(fn, 1000);
}

exaft1sec(function (): void {
  console.log("Hello ji");
});

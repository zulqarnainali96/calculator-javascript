class Calculator {
  static plus = "";
  static minus = "";
  static divide = "";
  static multiply = "";
  static previousValue = "";
  static nextValue = "";

  constructor(element, screen1, screen2) {
    // prettier-ignore
    this.element = element,
    this.screen1 = screen1,
    this.screen2 = screen2;
  }
  printScreen(item) {
    Calculator.previousValue = item.textContent;
    let value = item.textContent;
    this.screen2.value += value;
  }
  clearScreen() {
    this.screen1.value = "";
    this.screen2.value = "";
  }
  plusOperation(item) {
    this.screen1.value = this.screen2.value;
    this.screen2.value = "";
    if (this.screen2.value?.length > 0) {
      Calculator.nextValue = this.screen2.value;
      this.screen2.value = item.textContent;
    }
    if (item.textContent === "=") {
      console.log(`${Calculator.previousValue} + ${Calculator.nextValue}`);
    }
    // console.log(this.screen2.value);
    // console.log(Calculator.previousValue);
  }
  operations(item) {
    console.log(item.textContent);
  }
  minusOperation() {
    this.screen1.value = this.screen2.value;
    this.screen2.value = "";
    if (this.screen2.value?.length > 0) {
      this.screen2.value = item.textContent;
    }
    console.log(this.screen2.value);
  }
  divideOperation() {
    this.screen1.value = this.screen2.value;
    this.screen2.value = "";
    if (this.screen2.value?.length > 0) {
      this.screen2.value = item.textContent;
    }
    console.log(this.screen2.value);
  }
  multiplyOperation() {
    this.screen1.value = this.screen2.value;
    this.screen2.value = "";
    if (this.screen2.value?.length > 0) {
      this.screen2.value = item.textContent;
    }
    console.log(this.screen2.value);
  }
}

let element = "";
const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");
const buttons = document.querySelectorAll("[data-attri=btn]");

const caculator = new Calculator(element, screen1, screen2);

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent != "=") {
      caculator.printScreen(item);
    }
    if (item.textContent == "Clear") {
      caculator.clearScreen();
    }
    if (item.textContent == "+") {
      caculator.plusOperation(item);
    }
    if (item.textContent == "-") {
      caculator.minusOperation(item);
    }
    if (item.textContent == "*") {
      caculator.multiplyOperation(item);
    }
    if (item.textContent == "/") {
      caculator.divideOperation(item);
    }
    if (item.textContent == "=") {
      caculator.operations(item);
    }
  });
});

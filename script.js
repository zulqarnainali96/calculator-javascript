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
    let value = item.textContent;
    this.screen2.value += value;
    if (this.screen2.value > 0) {
      Calculator.nextValue = this.screen2.value;
    }
  }
  clearScreen() {
    this.screen1.value = "";
    this.screen2.value = "";
  }
  plusOperation(item) {
    this.screen1.value = this.screen2.value;
    this.screen2.value = "";
    Calculator.previousValue = this.screen1.value;
  }
  operations(item) {
    // console.log(parseInt(Calculator.previousValue) + parseInt(Calculator.nextValue))
    if (Calculator.previousValue.includes("/")) {
      Calculator.plus =
        parseInt(Calculator.previousValue) / parseInt(Calculator.nextValue);
    } else if (Calculator.previousValue.includes("+")) {
      Calculator.plus =
        parseInt(Calculator.previousValue) + parseInt(Calculator.nextValue);
    } else if (Calculator.previousValue.includes("*")) {
      Calculator.plus =
        parseInt(Calculator.previousValue) * parseInt(Calculator.nextValue);
    } else if (Calculator.previousValue.includes("-")) {
      Calculator.plus =
        parseInt(Calculator.previousValue) - parseInt(Calculator.nextValue);
    }
    this.screen1.value = Calculator.plus;
    this.screen2.value = "";
  }
  minusOperation() {
    this.screen1.value = this.screen2.value;
    this.screen2.value = "";
    Calculator.previousValue = this.screen1.value;
  }
  divideOperation() {
    this.screen1.value = this.screen2.value;
    this.screen2.value = "";
    Calculator.previousValue = this.screen1.value;
  }
  multiplyOperation() {
    this.screen1.value = this.screen2.value;
    this.screen2.value = "";
    Calculator.previousValue = this.screen1.value;
  }
  deleteBack() {
    if (this.screen2.value?.length > 0) {
      this.screen2.value = this.screen2.value?.slice(0, this.screen2.value?.length - 1);
    }
  }
}

let element = "";
const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");
const buttons = document.querySelectorAll("[data-attri=btn]");

const caculator = new Calculator(element, screen1, screen2);

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent != "=" && item.textContent !== "Delete") {
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
    if (item.textContent == "Delete") {
      caculator.deleteBack();
    }
  });
});

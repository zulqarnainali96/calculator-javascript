class Calculator {
  constructor(screen1, screen2, operator) {
    this.screen1 = screen1;
    this.screen2 = screen2;
    this.operator = operator;
  }
  addValuetoScreen(item) {
    if (item.textContent == "Clear") {
      this.clearScreen();
    } else if (item.textContent == "Delete") {
      this.deleteBackspace();
    } else {
      if (screen2.value == "0") {
        screen2.value == "";
      }
      screen2.value += item.textContent;
    }
  }
  clearScreen() {
    this.screen2.value = "0";
  }
  deleteBackspace() {
  }
}

const btn = document.querySelectorAll(".btn");
const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");

const calculator = new Calculator(screen1, screen2);

btn.forEach((item) => {
  item.addEventListener("click", () => calculator.addValuetoScreen(item));
});

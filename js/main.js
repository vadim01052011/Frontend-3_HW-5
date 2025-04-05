// Створіть змінну, що симулює вибір варіанта зі списку. 
// Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". 
// Використайте switch
const drinkChoice = "Чай";

switch (drinkChoice) {
  case "Кава":
    console.log("Ви обрали: Кава");
    break;
  case "Чай":
    console.log("Ви обрали: Чай");
    break;
  case "Сік":
    console.log("Ви обрали: Сік");
    break;
  default:
    console.log("Вибрано невідомий напій");
}

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. 
// Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const dayOfWeek = "неділя";

switch (dayOfWeek.toLowerCase()) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "пʼятниця":
    console.log("Це робочий день");
    break;
  case "субота":
  case "неділя":
    console.log("Це вихідний день");
    break;
  default:
    console.log("Невірний день тижня");
}

// Створіть змінну для зберігання номера місяця. 
// За номером місяця визначайте пору року і виводьте відповідне повідомлення.
const monthNumber = 3;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Невірний номер місяця");
}

// Створіть змінну для зберігання назви кольору. 
// Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
const color = "зелений";

switch (color) {
  case "червоний":
    console.log("СТОП");
    break;
  case "жовтий":
    console.log("Чекати");
    break;
  case "зелений":
    console.log("Йти");
    break;
  default:
    console.log("Невідомий колір");
}

// Створіть змінні для зберігання двох чисел та оператора (як у списку select). 
// Виконайте відповідну операцію та виведіть результат. 
// У випадку ділення на нуль — виведіть попередження.
const num1 = 10;
const num2 = 0;
const operator = "/";

switch (operator) {
  case "+":
    console.log(`Результат: ${num1 + num2}`);
    break;
  case "-":
    console.log(`Результат: ${num1 - num2}`);
    break;
  case "*":
    console.log(`Результат: ${num1 * num2}`);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Помилка: ділення на нуль!");
    } else {
      console.log(`Результат: ${num1 / num2}`);
    }
    break;
  default:
    console.log("Невідома операція");
}

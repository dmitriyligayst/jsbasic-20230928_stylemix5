/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (typeof name === 'string' && name !== null) {
    let userName = name.trim();

    if (userName.length >= 4 && /^[a-zA-Z0-9а-яА-Я]+$/.test(userName) && userName.indexOf(' ') === -1) {
      return true;
    }
  }

  return false;
}

function sayHello() {
  let userName = prompt('Dmitriy');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

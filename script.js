'use strict';
const randomNumber = () => {
	let number = 1;
	return () => {
		return number = Math.floor(Math.random() * 100) || number;
	}
};
const attemptsNumber = () => {
	let attempts;
	return () => {
		return attempts = 10;
	}
};
const restart = () => {
	number = getRandomNumber();
	attempts = getAttempts();
	msg = prompt('Введите ваше число (Осталось попыток ' + attempts + ')');
	validateNumber(msg);
};
const getRandomNumber = randomNumber();
let number = getRandomNumber();
let getAttempts = attemptsNumber();
let attempts = getAttempts();

alert('Загадано число от 1 до 100\r\nВаша задача его угадать.\r\nУ вас ' + attempts + ' попыток' + '\r\nПоехали!');
let msg = prompt('Введите ваше число (Осталось попыток ' + attempts + ')');

const validateNumber = msg => {
	let userNumber = msg;
	if (typeof parseFloat(userNumber) === 'number' && !isNaN(userNumber) && typeof parseFloat(userNumber) !== 'object') {
		if (attempts > 0) {
			if (parseFloat(userNumber) === number) {
				let conf = confirm('\u2705Молодец!\r\n\u2705Ты правильно угадал(-ла) число!' +
					'\r\n\u2705Поздравляю!\r\nПопробовать еще раз?');
				if (conf) {
					restart();
				}
				return;
			} else if (userNumber === null) {
				let conf = confirm('Похоже вы нажали «Отмена»\r\nЖелаете выйти?');
				if (!conf) {
					msg = prompt('Введите ваше число (Осталось попыток ' + attempts + ')');
					validateNumber(msg);
				}
				return;
			} else if (parseFloat(userNumber) < number) {
				--attempts;
				if (attempts > 0) {
					alert('\u274cНеверно!\r\n\u274cВаше число меньше загаданного\r\n\u274cПопробуй еще раз!');
					msg = prompt('Введите ваше число (Осталось попыток ' + attempts + ')');
					validateNumber(msg);
				} else {
					let conf = confirm('Попытки закончились, сыграть заново с новым числом?');
					if (conf) {
						restart();
					}
					return;
				}
			} else if (parseFloat(userNumber) > number) {
				--attempts;
				if (attempts > 0) {
					alert('\u274cНеверно!\r\n\u274cВаше число больше загаданного\r\n\u274cПопробуй еще раз!');
					msg = prompt('Введите ваше число (Осталось попыток ' + attempts + ')');
					validateNumber(msg);
				} else {
					let conf = confirm('Попытки закончились, сыграть заново с новым числом?');
					if (conf) {
						restart();
					}
					return;
				}
			} else {
				--attempts;
				if (attempts > 0) {
					msg = prompt('Введено не число.\r\nВведите число! (Осталось попыток ' + attempts + ')');
					validateNumber(msg);
				} else {
					let conf = confirm('Попытки закончились, сыграть заново с новым числом?');
					if (conf) {
						restart();
					}
					return;
				}
			}
		} else if (attempts === 0) {
			restart();
		}
	} else {
		--attempts;
		if (attempts > 0) {
			msg = prompt('Введено не число.\r\nВведите число! (Осталось попыток ' + attempts + ')');
			validateNumber(msg);
		} else {
			let conf = confirm('Попытки закончились, сыграть заново с новым числом?');
			if (conf) {
				restart();
			}
			return;
		}
	}
};

validateNumber(msg);

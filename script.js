'use strict';
const randomNumber = () => {
	let number = 1;
	return function () {
		return number += Math.floor(Math.random() * 100);
	}
};
const getRandomNumber = randomNumber();
const number = getRandomNumber();
alert('Загадано число от 1 до 100\r\nВаша задача его угадать.\r\nПоехали!');
let msg = prompt('Введите ваше число');
const validateNumber = (msg) => {
	let userNumber = msg;
	if (typeof parseFloat(userNumber) === 'number' && !isNaN(userNumber) && typeof parseFloat(userNumber) !== 'object') {
		alert('Сравниваем число с загаданным...');
		if (parseFloat(userNumber) === number) {
			alert('\u2705Молодец!\r\n\u2705Ты правильно угадал(-ла) число!\r\n\u2705Поздравляю!');
			return;
		} else if (userNumber === null) {
			let conf = confirm('Похоже вы нажали «Отмена»\r\nЖелаете выйти?');
			if (conf) {
				return;
			} else {
				msg = prompt('Введите ваше число');
				validateNumber(msg);
			}
		} else if (parseFloat(userNumber) < number) {
			alert('\u274cНеверно!\r\n\u274cВаше число меньше загаданного\r\n\u274cПопробуй еще раз!');
			msg = prompt('Введите ваше число');
			validateNumber(msg);
		} else if (parseFloat(userNumber) > number) {
			alert('\u274cНеверно!\r\n\u274cВаше число больше загаданного\r\n\u274cПопробуй еще раз!');
			msg = prompt('Введите ваше число');
			validateNumber(msg);
		} else {
			alert('\u274cНеверно!\r\n\u274cПопробуй еще раз!');
			msg = prompt('Введите ваше число');
			validateNumber(msg);
		}
	} else {
		msg = prompt('Введено не число.\r\nВведите число!');
		validateNumber(msg);
	}
};

validateNumber(msg);

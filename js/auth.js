'use strict';
// Объекты
class User {
    constructor(options) {
        this.login = options.login.trim(); // Больше 6 символов, латиница
        this.lastName = options.lastName.trim(); // Кириллица, с заглавной буквы
        this.firstName = options.firstName.trim(); // Киририллица, с заглавной буквы
        this.patronymic = options.patronymic.trim(); // Киририллица, с заглавной буквы
        this.password = options.password.trim(); // Больше 6 символов. 1 заглваная буква, 1 маленькая и 1 цифра
    }

    validate() {

    }
}

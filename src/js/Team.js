/**
 * Функция создания команды,
 * @constructor Character
 * @param name имя персонажа
 * @param type тип персонажа
 */
export default class Team {
  constructor() {
    this.members = new Set();
  }
  /**
  * Метод добавляет персонаж
  */

  add(character) {
    if (this.members.has(character)) throw new Error('Данный персонаж добавлен ранее');
    this.members.add(character);
  }
  /**
  * Метод несколько персонажей
  */

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item);
    }
  }
  /**
  * Метод возвращает массив персонажей
  */

  toArray() {
    return Array.from(this.members);
  }
}

const team = new Team();
console.log(team);

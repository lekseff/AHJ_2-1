export default class Game {
  constructor(container, images) {
    this.container = container;
    this.images = images;
    this.boardSize = 4; // Размер поля
    this.currentPosition = 1; // Стартовая позиция гоблина

    this.renderBoard();
  }

  /**
   * Создает элемент поля
   * @returns - html элемент
   */
  static createCell() {
    const element = document.createElement('div');
    element.classList.add('cell');
    return element;
  }

  /**
   * Старт игры
   */
  start() {
    this.container.children[this.currentPosition].append(this.images);
    setInterval(() => {
      const position = this.randomPosition();
      this.container.children[position].append(this.images);
    }, 1000);
  }

  /**
   * Рендер поля
   */
  renderBoard() {
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      this.container.append(Game.createCell());
    }
  }

  /**
   * Генератор случайной позиции
   * @returns Номер позиции
   */
  randomPosition() {
    const maxValue = this.boardSize ** 2;
    let position = Math.floor(Math.random() * maxValue);
    while (position === this.currentPosition) {
      position = Math.floor(Math.random() * maxValue);
    }
    this.currentPosition = position;
    return position;
  }
}

class Sudoku {
    constructor() {
        this.board = this.createEmptyBoard();
        this.initialBoard = JSON.parse(JSON.stringify(this.board)); // Сохраняем исходное состояние доски
    }

    // Создание пустого игрового поля 9x9
    createEmptyBoard() {
        return Array(9).fill().map(() => Array(9).fill(0));
    }

    // Метод для сброса поля до исходного состояния
    resetBoard() {
        this.board = JSON.parse(JSON.stringify(this.initialBoard)); //восстанавливается из копии this.initialBoard, которая была сохранена при инициализации.
        renderBoard(this.board); //перерисовывает игровое поле на веб-странице
    }

    // Метод для генерации правильного заполненного игрового поля
    generateValidBoard() {
        this.board = this.createEmptyBoard();
        this.fillBoard(0, 0);
        renderBoard(this.board);
    }

    // Рекурсивный метод для заполнения доски 
    fillBoard(row, col) {
        if (row === 9) return true;

        if (col === 9) {
            return this.fillBoard(row + 1, 0);
        }

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);

        for (let num of numbers) {
            if (this.isValidMove(row, col, num)) {
                this.board[row][col] = num;

                // Переходим к следующей ячейке
                if (this.fillBoard(row, col + 1)) {
                    return true;
                }

                this.board[row][col] = 0;
            }
        }

        return false;
    }

    // Проверка, является ли ход допустимым
    isValidMove(row, col, num) {
        return !this.isInRow(row, num) && !this.isInCol(col, num) && !this.isInSquare(row, col, num);
    }

    isInRow(row, num) {
        for (let i = 0; i < 9; i++) {
            if (this.board[row][i] === num) {
                return true;
            }
        }
        return false;
    }

    isInCol(col, num) {
        for (let i = 0; i < 9; i++) {
            if (this.board[i][col] === num) {
                return true;
            }
        }
        return false;
    }

    isInSquare(row, col, num) {
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (this.board[i][j] === num) {
                    return true;
                }
            }
        }
        return false;
    }

    checkErrors() {
        let errors = [];

        // Сначала убираем все предыдущие подсветки
        const cells = document.querySelectorAll("#sudokuBoard td");
        //это метод, который возвращает все элементы, подходящие под заданный CSS-селектор.
        cells.forEach(cell => cell.classList.remove('error', 'correct')); 

        // Проверяем строки
        for (let row = 0; row < 9; row++) {
            if (this.hasDuplicateInRow(row)) {
                errors.push(`Ошибка в строке: ${row + 1}`);
                for (let col = 0; col < 9; col++) {
                    document.querySelector(`#sudokuBoard tr:nth-child(${row + 1}) td:nth-child(${col + 1})`).classList.add('error');
                }
            }
        }

        // Проверяем столбцы
        for (let col = 0; col < 9; col++) {
            if (this.hasDuplicateInCol(col)) {
                errors.push(`Ошибка в столбце: ${col + 1}`);
                for (let row = 0; row < 9; row++) {
                    document.querySelector(`#sudokuBoard tr:nth-child(${row + 1}) td:nth-child(${col + 1})`).classList.add('error');
                }
            }
        }

        // Проверяем квадраты 3x3
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                if (this.hasDuplicateInSquare(row, col)) {
                    errors.push(`Ошибка в квадрате с началом в строке ${row + 1} и столбце ${col + 1}`);
                    for (let i = row; i < row + 3; i++) {
                        for (let j = col; j < col + 3; j++) {
                            document.querySelector(`#sudokuBoard tr:nth-child(${i + 1}) td:nth-child(${j + 1})`).classList.add('error');
                        }
                    }
                }
            }
        }

        // Если нет ошибок, то подсвечиваем все поле желтым цветом
        if (errors.length === 0) {
            const tableCells = document.querySelectorAll("#sudokuBoard td");
            tableCells.forEach(cell => {
                cell.classList.add('correct');
            });
        }

        return errors;
    }


    // Проверка на дубли в строке
    hasDuplicateInRow(row) {
        const seen = new Set();
        for (let i = 0; i < 9; i++) {
            const num = this.board[row][i];
            if (num !== 0 && seen.has(num)) {
                return true;
            }
            if (num !== 0) {
                seen.add(num);
            }
        }
        return false;
    }

    // Проверка на дубли в столбце
    hasDuplicateInCol(col) {
        const seen = new Set();
        for (let i = 0; i < 9; i++) {
            const num = this.board[i][col];
            if (num !== 0 && seen.has(num)) {
                return true;
            }
            if (num !== 0) {
                seen.add(num);
            }
        }
        return false;
    }

    // Проверка на дубли в квадрате 3x3
    hasDuplicateInSquare(row, col) {
        const seen = new Set();
        for (let i = row; i < row + 3; i++) {
            for (let j = col; j < col + 3; j++) {
                const num = this.board[i][j];
                if (num !== 0 && seen.has(num)) {
                    return true;
                }
                if (num !== 0) {
                    seen.add(num);
                }
            }
        }
        return false;
    }
}

// Создаем экземпляр 
const sudoku = new Sudoku();

function renderBoard(board) {
    const table = document.getElementById("sudokuBoard");
    table.innerHTML = ""; 

    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            const input = document.createElement("input");
            input.type = "number";
            input.min = "1";
            input.max = "9";
            input.value = board[i][j] === 0 ? "" : board[i][j];
            input.addEventListener("input", () => updateCell(i, j, input.value));
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Функция для обновления значения клетки
function updateCell(row, col, value) {
    const num = parseInt(value);
    if (isNaN(num) || num < 1 || num > 9) {
        sudoku.board[row][col] = 0; // Если введено неверное значение, сбрасываем клетку
    } else {
        sudoku.board[row][col] = num;
    }
}

// Функция для генерации доски
function generateBoard() {
    sudoku.generateValidBoard();
}

// Функция для проверки ошибок
function checkErrors() {
    const errors = sudoku.checkErrors();
    if (errors.length === 0) {
        alert("Ошибок нет!");
    } else {
        alert("Ошибки:\n" + errors.join("\n"));
    }
}

// Функция для сброса доски
function resetBoard() {
    sudoku.resetBoard();
    renderBoard(sudoku.board);
}

// Изначально рендерим пустую доску
renderBoard(sudoku.board);
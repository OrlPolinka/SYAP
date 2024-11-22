class Sudoku{
    constructor(){
        this.field = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    checkColumn(){
        for(let column = 0; column < 9; column++){
            const seen = new Set();
            for(let row = 0; row < 9; row++){
                const number = this.field[row][column];
                if(number !== 0){
                    if(seen.has(number)){
                        console.log(`Ошибка в столбце ${column + 1}`);
                        return false;
                    }
                    seen.add(number);
                }
            }
        }
        return true;
    }

    checkRow(){
        for(let row = 0; row < 9; row++){
            const seen = new Set();
            for(let column = 0; column < 9; column++){
                const number = this.field[row][column];
                if(number !== 0){
                    if(seen.has(number)){
                        console.log(`Ошибка в строке ${row + 1}`);
                        return false;
                    }
                    seen.add(number);
                }
            }
        }
        return true;
    }

    checkSquare(){
        for(let boxrow = 0; boxrow < 3; boxrow++){
            for(let boxcolumn = 0; boxcolumn < 3; boxcolumn++){
                const seen = new Set();
                for(let row = 0; row < 3; row++){
                    for(let column = 0; column < 3; column++){
                        const number = this.field[boxrow * 3 + row][boxcolumn * 3 + column];
                        if(number !== 0){
                            if(seen.has(number)){
                                console.log(`Ошибка в квадрате ${boxrow * 3 + boxcolumn + 1}`);
                                return false;
                            }
                            seen.add(number);
                        }
                    }
                }
            }
        }
        return true;
    }

    initialState(){
       this.field = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    checkField(){
        return this.checkColumn() && this.checkRow() && this.checkSquare();
    }

    generateSolution() {
        this.solveSudoku(this.field);
    }

    solveSudoku(board, row = 0, col = 0) {
        if (row === 9) return true;
        if (col === 9) return this.solveSudoku(board, row + 1, 0);
        if (board[row][col] !== 0) return this.solveSudoku(board, row, col + 1);

        for (let num = 1; num <= 9; num++) {
            if (this.isValid(board, row, col, num)) {
                board[row][col] = num;
                if (this.solveSudoku(board, row, col + 1)) {
                    this.field = board;
                    return true;
                }
                board[row][col] = 0;
            }
        }
        return false;
    }

    isValid(board, row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num) return false;
            const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(col / 3) + i % 3;
            if (board[boxRow][boxCol] === num) return false;
        }
        return true;
    }

    printField() {
        this.field.forEach(row => console.log(row.join(" ")));
    }
}

let sudoku = new Sudoku();
sudoku.generateSolution();
sudoku.printField();
console.log(sudoku.checkField() ? "Поле правильно" : "Ошибка на поле");
sudoku.initialState();
sudoku.printField();
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

Ввод размеров матрицы
rl.question("Введите количество строк (N): ", (n) => {
    rl.question("Введите количество столбцов (M): ", (m) => {
        const rows = parseInt(n);
        const cols = parseInt(m);

        let matrix = [];
        let i = 0;

        function inputRow() {
            if (i < rows) {
                rl.question(
                    `Введите ${cols} чисел через пробел для строки ${i + 1}: `,
                    (input) => {
                        const row = input.split(" ").map(Number);

                        if (row.length !== cols || row.some(isNaN)) {
                            console.log("Ошибка ввода. Попробуйте снова.");
                            return inputRow();
                        }

                        matrix.push(row);
                        i++;
                        inputRow();
                    }
                );
            } else {
                findMin();
            }
        }

        function findMin() {
            let min = matrix[0][0];
            let minRow = 0;
            let minCol = 0;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (matrix[r][c] < min) {
                        min = matrix[r][c];
                        minRow = r;
                        minCol = c;
                    }
                }
            }

            console.log("\nМатрица:");
            console.log(matrix);

            console.log(`\nМинимальный элемент: ${min}`);
            console.log(`Индексы: строка ${minRow}, столбец ${minCol}`);

            rl.close();
        }

        inputRow();
    });
});
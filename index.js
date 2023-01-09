 import fs from 'fs';
 import chalk from 'chalk';

function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo, enconding, (_, texto) => {
        console.log(chalk.green(texto));
    });
};

pegaArquivo('./arquivos/texto.md');
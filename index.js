 import fs from 'fs';
 import chalk from 'chalk';

 function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
 };

 function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, enconding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
 };

/* function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
        if (erro) trataErro(erro)
        console.log(chalk.green(texto));
    });
}; */

pegaArquivo('./arquivos/texto.md');
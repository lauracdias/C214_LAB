# Calculadora utilizando Node.js

A calculadora possui 6 operações:
* soma
* subtração
* multiplicação
* divisão 
* exponenciação 
* resto da divisão

## Configurações de ambiente

Primeiramente é necessário realizar o download do [Node.js](https://nodejs.org/en/download).

Para adicionar as dependências do projeto basta incluir no arquivo package.json o trecho abaixo:


    "dependencies": 
    {
        "prompt": "^1.3.0",
        "prompt-sync": "^4.2.0",
        "validate.js": "^0.13.1"
    }


## Inicialização

Após concluir as etapas acima, basta digitar o seguinte comando para iniciar a calculadora:


    node index.js 


## Exemplo

Após a inicialização da calculadora, forneça dois números inteiros:

    2
    3

Em seguida entre com a operação escolhida:

    ^

O resultado será exibido na tela:

    8


const validate = require('validate.js');
const numero = require('./validate');

const Calculadora =
{
    resultado(num1, num2, op)
    {
        const verificarNum1 = validate({ num1 },  numero.verificaDado);
        const verificarNum2 = validate({ num2 },  numero.verificaDado);  

        if(verificarNum1 !== undefined || verificarNum2 !== undefined)
        {
            return 'Inválido';
        }

        else
        {
            switch(op)
            {
                case '+':
                    return num1 + num2;

                case '-':
                    return num1 - num2;

                case '/':
                    return num1 / num2;
            
                case '^':
                    return num1 ** num2;
                
                case '*':
                    return num1 * num2;

                case '%':
                    return num1 % num2;
            }
        }
    }
};

module.exports = Calculadora;
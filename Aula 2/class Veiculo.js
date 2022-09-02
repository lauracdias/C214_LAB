class Veiculo 
{
    placa;
    ano;

    constructor(placa, ano)
    {
        this.ano = ano;
        this.placa = placa;
    }

    setPlaca(novaPlaca)
    {
        this.placa = novaPlaca;
    }

    setAno(novoAno)
    {
        this.ano = novoAno;
    }

    getPlaca()
    {
        return this.placa;
    }

    getAno()
    {
        return this.ano;
    }

    exibirDados()
    {
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
    }
}

class Caminhao extends Veiculo
{
    eixos;

    constructor(placa, ano, eixos)
    {
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(novoEixo)
    {
        this.eixos = novoEixo;
    }

    getEixos()
    {
        return this.eixos;
    }

    exibirDados()
    {
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
        console.log("Eixos: ", this.eixos);
    }
}

class Onibus extends Veiculo
{
    assentos;

    constructor(placa, ano, assentos)
    {
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(novoAssento)
    {
        this.assentos = novoAssento;
    }

    getAssentos()
    {
        return this.assentos;
    }

    exibirDados()
    {
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
        console.log("Assentos: ", this.assentos);
    }
}
//# Desafio da semana #4

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function( arg ) {
    return !!arg ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log( '\nValores Falsy:' );

var falsy = [ NaN, undefined, null, '', 0, false, 'Rodrigo' ]
falsy.forEach( function( arg, value, key ) {
    console.log( 'O tipo primitivo ' + key[ value ] + ' é ' + isTruthy( arg ) + '.' )
} );


//Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
console.log( '\nValores Truthy:' );

var truthy = [ 'Rodrigo', 10, function(){}, {}, true, '[]', { nome: 'Rodrigo', idade: 41 }, 'Almeida', [ 10, 20, 30 ], 50 ];
truthy.forEach( function( arg, value, key ) {
    console.log( 'O tipo primitivo ' + key[ value ] + ' é ' + isTruthy( arg ) + '.' )
} );
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
console.log( '\nObjeto Carro:' );

var carro = {
    marca: 'Renault',
    modelo: 'Sandero',
    placa: 'IXB-5959',
    ano: 2016,
    cor: 'Branco',
    quantasPortas: 5,
    assentos: 5,
    quantidadePessoas: 0
};

console.log( carro );

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function( cor ) {
    carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function() {
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function() {
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function() {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function() {
    return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo() + '.';
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.addPerson = function( add ) {
    var totPessoas = carro.quantidadePessoas + add;

    if ( carro.assentos === carro.quantidadePessoas && totPessoas >= carro.assentos ) {
      return 'O carro já está lotado!';
    }

    if ( totPessoas > carro.assentos ) {
      var difAssentos = carro.assentos - carro.quantidadePessoas;
      var singular = difAssentos === 1 ? 'pessoa!' : 'pessoas!'
      return 'Só cabem mais ' + difAssentos + ' ' + singular;
    }

    carro.quantidadePessoas += add;
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!'
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log( '\nQual a cor atual do carro?' );
console.log( carro.obterCor() ); // Branco

// Mude a cor do carro para vermelho.

console.log( '\nMude a cor do carro para vermelho:' );
carro.mudarCor( 'Vermelho' );

// E agora, qual a cor do carro?

console.log( '\nE agora, qual a cor do carro?' );
console.log( carro.obterCor() );

// Mude a cor do carro para verde musgo.

console.log( '\nMude a cor do carro para verde musgo:' );
carro.mudarCor( 'Verde Musgo' );

// E agora, qual a cor do carro?

console.log( '\nE agora, qual a cor do carro?' );
console.log( carro.obterCor() );


// Qual a marca e modelo do carro?

console.log( '\nQual a marca e modelo do carro?' );
console.log( carro.obterMarcaModelo() );

// Adicione 2 pessoas no carro.

console.log( '\nAdicione 2 pessoas no carro:' );
console.log(carro.addPerson( 2 ) );

// Adicione mais 4 pessoas no carro.

console.log( '\nAdicione mais 4 pessoas no carro:' );
console.log( carro.addPerson( 4 ) );

// Faça o carro encher.

console.log( '\nFaça o carro encher:' );
console.log( carro.addPerson( 3 ) );

// Tire 4 pessoas do carro.

console.log( '\nTire 4 pessoas do carro:' );
console.log( carro.addPerson( -4 ) );

// Adicione 10 pessoas no carro.

console.log( '\nAdicione 10 pessoas no carro:' );
console.log( carro.addPerson( 10 ) );

// Quantas pessoas temos no carro?

console.log('\nQuantas pessoas temos no carro?'); //
console.log( carro.quantidadePessoas );

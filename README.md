Produto final do sprint 4 - Biblioteca para verificar se o número do cartão de crédito é válido ou não

Validação de cartão v.1.0.0
Esta biblioteca se destina à validação do número de cartão de crédito por meio do algoritmo de Luhn, para uso em aplicações web. 
Na versão atual é capaz de validar números de cartão de crédito retornando 'true' se o cartão for válido ou 'false' se o número for inválido.

Os métodos utilizados na biblioteca são:
cardValidator(cardNumber);

Exemplo de uso:
$node
- let cardValidator = require("Card-Valid") 
  cardValidator(36490102462661); //'true'

Versão 1.0.0
Funcionalidades: validação do número de cartão de crédito;
Verifica se o número de cartão de crédito é válido ou não.

Instalação
Você deverá ter o node + npm instalados. 
Para guia de instalação, visite o site oficial.
Proceda com a instalação com $npm install Card-Valid

Roadmap oficial do projeto

Versão 2.0.0 (previsão novembro/2018)
- Implementação para verificar qual é a  bandeira é o cartão(Ex: Mastercard, Visa);
- README translated to english;

Versão 1.0.0 (released)
Funcionalidades: 
- Validação do número de cartão de crédito;
- Verifica se o número de cartão de crédito é válido ou não.

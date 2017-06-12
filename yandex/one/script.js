"use strict"

/*
{"cards":[{"from":"New-York","to":"Boston","typeTran":2,"infoTran":{"flightNumber":"34A","placeNumber":31}}]}

Формируем массив карточек с помощью класса "Card".
  from - точка отправления string
  to - точка прибытия string
  typeTran - индентификатор типа транспорта integer
  infoTran - объект содержащий в себе подробную информацию о поездке на заданом
    отрезке object

  getRoute(); - возвращает строку содержащую в себе пункты прибытия и отбытия.
    Если есть дополнительная информация ее тоже
  getTypeTran() - Преобразует id транспортного средства в string


*/

var tranTypesDeclin = [
  "Автомобиле",
  "Поезде",
  "Самолете"
];
class Card {
  constructor(from,to,typeTran,infoTran) {
    this.from = from;
    this.to = to;
    this.typeTran = typeTran;
    this.infoTran = infoTran;

  }

  getRoute()
  {
      var action = this.typeTran <= 1 ? "Едем": "Летим";
      var endChar;
      var newFrom;
      /*
      if(this.from[this.from.length-1] == 'а')
        {
          newFrom = this.from;
          newFrom = newFrom.substr(0, newFrom.length-1)+"ы";
        }else{
          newFrom = this.from + "a";
        }*/

      var str = action +" из " + this.from + " в "+this.to + " на " + tranTypesDeclin[this.typeTran]+". ";
      if(this.typeTran > 0 && (this.infoTran != null || this.infoTran != undefined))
      {
        var tmp = "Номер вашего рейса: <b>"+ this.infoTran.flightNumber +"</b> место: <b>"+ this.infoTran.placeNumber+ "</b>.";
        str += tmp;
      }
      return str;
  }
  getTypeTran()
  {
    var tranTypes = [
      "Автомобиль",
      "Поезд",
      "Самолет"
    ];
    console.log(tranTypes[this.typeTran]);
    return tranTypes[this.typeTran];
  }
}
function sortCard() {
  var arr = cards.slice(0);
  // && arr[j].from === arr[j-1].to
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length-1; j > 0; j--) {
      if(arr[j].from !== arr[j-1].to )
      {
        var tmp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = tmp;
      }
    }
  }
  return arr;
}


function tmpFunc(cards)
{
  for (var i = 0; i < cards.length; i++) {
    console.log(cards[i].getRoute());
  }
}


function writeRoute(cards)
{
  var ul = document.createElement('ul');
  ul.id = "list";
  document.innerHTML = ul;
  for (var i = 0; i < cards.length; i++) {
    ul.innerHTML += "<li>" + cards[i].getRoute();
  }
  ul.innerHTML += "<li>Пешая прогулка</li>";
  var body = document.body;
  body.appendChild(ul);
  return ul;
}
var cards = [];

cards[2] = new Card("Берлин", "Гамбург", 1, {flightNumber: 1, placeNumber: 2});
cards[1] = new Card("Санкт-Петербург", "Дублин", 2, {flightNumber: 1, placeNumber: 2});
cards[0] = new Card("Москва", "Санкт-Петербург", 0);
cards[3] = new Card("Дублин", "Берлин", 1, {flightNumber: 1, placeNumber: 2});

/*
cards[0] = new Card("D", "M", 0);
cards[1] = new Card("A", "B", 2, {flightNumber: 1, placeNumber: 2});
cards[2] = new Card("C", "D", 1, {flightNumber: 1, placeNumber: 2});
cards[3] = new Card("B", "C", 1, {flightNumber: 1, placeNumber: 2});
*/
var sortedCards = sortCard();
/*
tmpFunc(cards);
console.log("\n");
tmpFunc(sortedCards);
*/
writeRoute(sortedCards);

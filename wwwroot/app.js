let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade')
let stockPriceElement = document.getElementById('stock-price')
let lastPrice = null;
ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  stockPriceElement.innerText = price;
  stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';

  lastPrice = price;
} 

let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade')
let stockPriceElement2 = document.getElementById('stock-price2')
let lastPrice2 = null;
ws2.onmessage = (event) => {
  let stockObject2 = JSON.parse(event.data);
  let price2 = parseFloat(stockObject2.p).toFixed(2);
  stockPriceElement2.innerText = price2;
  stockPriceElement2.style.color = !lastPrice2 || lastPrice2 === price2 ? 'white' : price2 > lastPrice2 ? 'green' : 'red';

  lastPrice2 = price2;
}

let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade')
let stockPriceElement3 = document.getElementById('stock-price3')
let lastPrice3 = null;
ws3.onmessage = (event) => {
  let stockObject3 = JSON.parse(event.data);
  let price3 = parseFloat(stockObject3.p).toFixed(2);
  stockPriceElement3.innerText = price3;
  stockPriceElement3.style.color = !lastPrice3 || lastPrice3 === price3 ? 'white' : price3 > lastPrice3 ? 'green' : 'red';
  lastPrice3 = price3;
}

let ws4 = new WebSocket('wss://stream.binance.com:9443/ws/galeur@trade')
let stockPriceElement4 = document.getElementById('stock-price4')
let lastPrice4 = null;
ws4.onmessage = (event) => {
  let stockObject4 = JSON.parse(event.data);
  let price3 = parseFloat(stockObject4.p).toFixed(2);
  stockPriceElement4.innerText = price4;
  stockPriceElement4.style.color = !lastPrice4 || lastPrice4 === price4 ? 'white' : price4 > lastPrice4 ? 'green' : 'red';

  lastPrice4 = price4;
}

let ws5 = new WebSocket('wss://stream.binance.com:9443/ws/gmteur@trade')
let stockPriceElement5 = document.getElementById('stock-price5')
let lastPrice5 = null;
ws4.onmessage = (event) => {
  let stockObject5 = JSON.parse(event.data);
  let price3 = parseFloat(stockObject5.p).toFixed(2);
  stockPriceElement5.innerText = price4;
  stockPriceElement5.style.color = !lastPrice5 || lastPrice5 === price5 ? 'white' : price5 > lastPrice5 ? 'green' : 'red';

  lastPrice5 = price5;
}


// BELOW ARE ALL API CALLS

const uri = 'api/Issue';
let todos = [];

function getItems() {
  fetch(uri)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}

function addItem(itemTitle, itemDescription) {

  const item =  {
    "id": 0,
    "title": "string5",
    "description": "string5",
    "priority": 5,
    "issueType": 5,
    "created": "2023-03-25T17:31:12.206Z",
    "completed": "2023-03-25T17:31:12.206Z"
  };

  fetch(uri, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .then(() => {
      getItems();
      addNameTextbox.value = '';
    })
    .catch(error => console.error('Unable to add item.', error));
}

const API_KEY = '8UDB5BR3RYL36LRA';

async function loadCourse() {
    let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=${API_KEY}`;
    let url2 = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=' + API_KEY;

    let response = await fetch(url2);
    let response2Json = await response.json();

    let course = response2Json['Realtime Currency Exchange Rate']['5. Exchange Rate'];
    document.getElementById('kurs').innerHTML += `Der aktuelle Bitcoin Preis beträgt: ${Math.round(course)}€`;
    //document.getElementById('kurs').innerHTML += `Der aktuelle Bitcoin Preis beträgt: ${Math.round(response2Json['Realtime Currency Exchange Rate']['5. Exchange Rate'])}€`;

    loadMonthlyCourse();
}

async function loadMonthlyCourse() {
    let url = 'https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=EUR&to_symbol=USD&apikey=' + API_KEY;
    let response = await fetch(url);
    let response2Json = await response.json();
    let coins = response2Json['Time Series FX (Monthly)'];

    //let courseMonth = document.getElementById('courseMonth');
    
    console.log(response);

    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i]['1. open'];
        courseMonth.innerHTML += `${coin}`;
        console.log(coin);
    }


}

import { useParams } from 'react-router-dom';
import data from '../data.js';

export default function Stock() {
  let { symbol } = useParams();
  let stock = data.filter((x) => x.symbol === symbol);
  console.log(stock);

  return (
    <div>
      <h1>{stock[0].name}</h1>
      <p>
        Ticker Symbol: <b>{stock[0].symbol}</b>
      </p>
      <p>Change: {stock[0].change} %</p>
      <p>High: {stock[0].high}</p>
      <p>Last Price: {stock[0].lastPrice}</p>
      <p>Low: {stock[0].low}</p>
      <p>Open: {stock[0].open}</p>
    </div>
  );
}

import { Link } from 'react-router-dom';
import data from '../data.js';

export default function Dashboard() {
  let stock = data;
  return (
    <div>
      {stock.map((x) => (
        <Link key={x.symbol} to={`/stocks/${x.symbol}`}>
          <h2>
            <b>{x.name}</b>
          </h2>
          <h3>Ticker: {x.symbol}</h3>
          <hr />
        </Link>
      ))}
      Dashboard Page Shows all stocks
    </div>
  );
}

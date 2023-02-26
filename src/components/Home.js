// import { Link } from 'react-router-dom';
import data from '../data';

export default function Home() {
  return (
    <>
      <h1>Most Active Stocks</h1>
      <table>
        <tr>
          <th>
            <h2>Ticker</h2>
          </th>
          <th>
            <h2>Company Name</h2>
          </th>
          <th>
            <h2>Price</h2>
          </th>
          <th>
            <h2>Change</h2>
          </th>
        </tr>

        {data.map((x) => {
          return (
            <tr>
              <th>
                <hr
                  style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '2px',
                  }}
                />
                {x.symbol}
              </th>

              <th>
                <hr
                  style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '2px',
                  }}
                />
                {x.name}
              </th>

              <th>
                <hr
                  style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '2px',
                  }}
                />
                ${x.lastPrice}
              </th>

              <th style={x.change < 0 ? { color: 'red' } : { color: 'green' }}>
                <hr
                  style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '2px',
                  }}
                />
                {x.change}%
              </th>
            </tr>
          );
        })}
      </table>
    </>
  );
}

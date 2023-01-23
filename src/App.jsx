import { useState, useEffect } from 'react'
import Header from '../Componets/Header'
import Coin from '../Componets/Coin'
import axios from 'axios'
function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
  axios
  .get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
  .then(res => {
    setCoins(res.data);
  })
  .catch(error => console.log(error));
}, []);

const handleChange = e => {
  setSearch(e.target.value)
  console.log(search)}

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
    <Header />
    <div>
      <input type='textarea' className = 'app__searchbar--bar' placeholder="Search For A Coin" onChange = {handleChange}/>
      </div>
        {filteredCoins.map(coin => {
          return ( <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.currrent_price} />)
        })}
    </div>
  )
}

export default App

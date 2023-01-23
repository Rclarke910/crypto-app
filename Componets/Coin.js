import React from "react";

const Coin = ({ name, image, symbol, price, volumee}) => {
    return (
        <div className = 'coin-container'>
            <div className = 'coin-row'>
                <div className = 'coin'>
                    <img src = {image} alt = "crypto" />
                    <h1>{name}</h1>
                    <p className = 'coin-symbol'>{symbol}</p>
                </div>
                <div className = "coin-data">
                    <p className = 'coin-price'>${price}</p>
                    
                </div>

            </div>

        </div>
    )
}

export default Coin
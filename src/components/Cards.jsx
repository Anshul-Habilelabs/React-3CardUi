import React from 'react';
import './Cards.css';

const Cards = (props) => {
    return (
        <div className="cards">
            <div className="card1">
                <p >{props.name}</p>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam nesciunt odit numquam reprehenderit! In repellendus explicabo, itaque illo nostrum voluptatem, nisi hic placeat, tempora fugit commodi impedit illum facere.</p>
                </div>
            </div>

        </div>
    )
};
export default Cards;
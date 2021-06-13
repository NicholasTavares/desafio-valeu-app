import React from 'react'

const Card = ({ name, img_url, type, height, weight, candy, candy_count, weaknesses, avg_spawns }) => {

    return (
        <div className='container-cards__card'>
            <div className={`container-cards__card__card-side container-cards__card__card-side-front backgroundCard-${type[0]}`}>
                <div className='container-cards__card__card-side__img'>
                    <img src={img_url} alt={name} />
                </div>
                <div className='container-cards__card__card-side__data'>
                    <p>{name}</p>
                    <p>Type: {type && type.map((res) => `${res}, `)}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                </div>
            </div>

            <div className={`container-cards__card__card-side container-cards__card__card-side-back backgroundCard-${type[0]}`}>
                <div className='container-cards__card__card-side__data'>
                    <p>{name}</p>
                    <p>Type: {type && type.map((res) => `${res}, `)}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Candy: {candy ? candy : '0'}</p>
                    <p>Candy count: {candy_count ? candy_count : 'Full level'}</p>
                    <p>Weaknesses: {weaknesses && weaknesses.map((res) => `${res}, `)}</p>
                    <p>Spawns chance: {avg_spawns}%</p>
                </div>
            </div>
        </div>

    )
}

export default Card
import React from 'react'

export default function ComidaCard() {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../src/assets/img/food.jpeg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

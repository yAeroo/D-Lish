import React from 'react'

function FoodCardDish(props) {
      return (
            <div className="flex items-center justify-center mx-1 h-[7rem] w-[98%] hover:bg-base-100 rounded-lg px-5 py-0 mb-1">
            <div className="flex items-center justify-start space-x-6 mt-0 w-[80%]">
              <div className="w-20 h-20 rounded overflow-hidden">
                <img className="w-full h-full object-cover" src={props.photo}/>
              </div>
              <div className="flex flex-col">
                <h2 className="text-md font-bold text-neutral-100">
                  {props.name}
                </h2>
                <h3 className="pt-[0.01rem] text-sm text-neutral-200">{props.cafetin}</h3>
                <p className="pt-[0.01rem] text-[0.80rem] text-neutral-200">$0.25 | Otros</p>
              </div>
            </div>
            <button className=" text-primary text-xs px-2 py-1 rounded-md ml-5">
        <div className="form-control">
    <input type="checkbox" className="checkbox checkbox-success" />
</div>
            </button>
          </div>
          )
}

export default FoodCardDish

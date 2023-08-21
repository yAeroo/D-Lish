import React from 'react'
import ExamplePfp from "../../assets/img/example-pfp.jpg";

function UsersProps(props) {
  const { name } = props;

  return (
    <div>
      <div className="overflow-y-auto max-height: 24rem" >
        <ul className="p-6 space-y-6">
          <li className="flex items-center">
            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
              <img src={ExamplePfp} alt="Annette Watson profile picture" />
            </div>
            <span className="text-yellow-50">{name}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UsersProps

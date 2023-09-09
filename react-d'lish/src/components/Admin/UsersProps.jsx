import React from "react";

function UsersProps(props) {
  const { name, photo } = props;

  return (
    <div className="bg-accent mx-4 md:mx-1 rounded-md">
      <div className="overflow-y-auto max-height:24rem ">
        <ul className="p-4 space-y-2 w-full">
          <li className="flex items-center">
            <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
              <img src={photo} alt="Annette Watson profile picture" />
            </div>
            <span className="text-yellow-50">{name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UsersProps;

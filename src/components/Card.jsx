import React from "react";

function Card({address, title, text}) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style={{
          backgroundImage:
            `url(${address})`,
        }}
      ></div>

      <div>
        <p className="text-[#141414] text-base font-medium leading-normal">
         {title}
        </p>
        <p className="text-[#3E4D5B] text-sm font-normal leading-normal">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Card;

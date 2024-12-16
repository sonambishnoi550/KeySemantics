import React from "react";
import CustomHeading from "./CustomHeading";
import CustomButton from "./CustomButton";

const CommonCard = ({text,list,classList}) => {
    return (
        <div>
            <CustomHeading text="Headless federated search" className="max-lg:text-center"/>
            <ul className="max-w-[552px] max-lg:mx-auto lg:ml-4 pt-5 ">
                {list && list.map((item, index) => (
                    <li key={index} className="list-disc text-royal_blue pb-2 text-base font-normal leading-custom_3xl max-lg:ml-4">
                        {item}
                    </li>
                ))}
            </ul>
            <CustomButton text="Get a demo" className="max-lg:mx-auto flex"/>
        </div >
    );
};

export default CommonCard;
import React from "react";
import VectorIcon from "../NearMe/icons/Vector.svg";
import clockIcon from "../NearMe/icons/clock.svg";
import HIcon from "../NearMe/icons/H.svg";
// import ManIcon from "../NearMe/icons/man.svg";
import PhnIcon from "../NearMe/icons/phone.svg";
import DirectionIcon from "../NearMe/icons/direction.svg";
import HospIcon from "../NearMe/icons/hospital.svg";
import RestaurantIcon from "../NearMe/icons/restaurant.svg";

let Contactnow = (category) => {
    if (category !== "Wastebin") {
        return (
            <button className=" border-2 border-gray-700 bg-white-200 rounded-xl my-auto whitespace-nowrap text-center text-xs font-semibold text-black-500 px-4 py-1 hover:bg-white-200 hover:text-black mr-2">
                <div className="flex">
                    <div>Contact now</div>
                    <div className="ml-3">
                        <img src={PhnIcon} alt=""></img>
                    </div>
                </div>
            </button>
        );
    }
};

let details = (props) => {
    if (props.category !== "Wastebin") {
        return (
            <div className="mt-3 flex">
                <div>
                    <img src={clockIcon} alt=""></img>
                </div>
                <div className="ml-3">{props.time}</div>
                <div className="ml-3">
                    <img src={HIcon} alt=""></img>
                </div>
                <div className="ml-3">{props.private}</div>
                {/* <div className="ml-3">
                    <img src={ManIcon} alt=""></img>
                </div>
                <div className="ml-3">{props.distance}</div> */}
            </div>
        );
    } else {
        return (
            <div className="mt-3 flex">
                {/* <div className="ml-3">
                    <img src={ManIcon} alt=""></img>
                </div>

                <div className="ml-3">{props.distance}</div> */}
            </div>
        );
    }
};

export default function Amenities(props) {
    return (
        <div
            className={`bg-white border-2 border-${props.color}-400 w-full p-5 rounded-xl shadow border-red`}>
            <div className="flex items-center">
                <div>
                    <img
                        src={
                            props.category === "Hospitals"
                                ? HospIcon
                                : props.category === "Food_Drink"
                                ? RestaurantIcon
                                : null
                        }
                        alt=""></img>
                </div>

                <div className="font-Poppins font-style:normal font-weight:600 font-bold text-black-600 text-xl">
                    {props.title}
                </div>
            </div>
            <div className="mt-3 flex">
                <div className="mr-5">{props.place}</div>

                <div className="flex">
                    <img src={VectorIcon} alt=""></img>
                    <div className={`ml-2 text-${props.color}-400`}>
                        {props.color}
                    </div>
                </div>
            </div>
            {details(props)}
            <div className="mt-2 flex flex-wrap ">
                <div className="flex  justify-center mt-4">
                    {Contactnow(props.category)}

                    <button className="border-2 border-gray-700 bg-white-200 rounded-xl my-auto whitespace-nowrap text-center text-xs font-semibold text-black-500 px-2 py-1  hover:bg-white-200 hover:text-black mr-2">
                        <div className="flex">
                            <div>Get Direction</div>
                            <div className="ml-3">
                                <img src={DirectionIcon} alt=""></img>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

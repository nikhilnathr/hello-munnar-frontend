import React, { useState } from "react";
import Icon from "../Common/Icon";

const Banner = ({ route, image }) => {
    const [liked, setLiked] = useState(route.liked);
    const { routeColorName } = route;

    const like = () => {
        setLiked(!liked);
        // store liked destination in local storage
    };
    return (
        <div className="relative w-full pb-7">
            <img
                src={image}
                alt=""
                className="w-full h-64 md:h-96 object-cover"
            />
            <button
                className="absolute flex bg-white items-center shadow-md justify-center left-8 top-8 w-8 h-8 rounded-full focus:outline-none"
                onClick={() => window.history.go(-1)}>
                <Icon
                    name="caretLeft"
                    color="black"
                    stroke={true}
                    className="text-black stroke-current"
                    size={5}
                />
            </button>

            <div className="absolute flex top-8 right-8 items-center bg-white px-2 py-0.5 rounded-md shadow-md">
                <Icon name="route" size={5} className="mr-1" />
                <span className="uppercase font-semibold text-sm">
                    {routeColorName} Route
                </span>
            </div>

            <button
                className="absolute flex items-center justify-center -bottom-0 right-8 w-14 h-14 bg-white shadow-lg rounded-full focus:outline-none"
                onClick={like}>
                <Icon
                    name="heart"
                    color={liked ? "red-500" : "gray-400"}
                    className={`stroke-2 ${liked} ? "fill-current text-red-500" : "stroke-current text-gray-400"`}
                    stroke={!liked}
                    size={7}
                />
            </button>
        </div>
    );
};

export default Banner;
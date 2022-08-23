import React from "react";
import "./image.css";
import main from '../../assets/main.jpg';

const imagePositions = [
    "img--start",
    "img--center",
    "img--end",
]

const imageSizes = [
    "img--small",
    "img--medium",
    "img--large"
]

function Image({
                   src,
                   alt,
                   imageSize,
                   imagePosition
               }) {

    const checkImagePosition = imagePositions.includes(imagePosition)
        ? imagePosition
        : imagePositions[0];

    const checkImageSize = imageSizes.includes(imageSize)
        ? imageSize
        : imageSizes[0];

    return (
        <img
            className={`img ${checkImageSize} ${checkImagePosition}`}
            src={ main }
            alt={alt}
        />
    );
}

export default Image;

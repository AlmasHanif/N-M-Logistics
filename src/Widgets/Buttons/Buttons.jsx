import React from "react"
import './Buttons.css'
import { FaArrowRight } from 'react-icons/fa'

export const Btn1 = ({ btnName }) => {
    return (
        <button class="btn1">
            <span>{btnName}</span>
            <FaArrowRight className="btnIcon" />
        </button>
    )
}

export const Btn2 = ({ btnName }) => {
    return (
        <button className="btn2">
            <span>{btnName}</span>
            <FaArrowRight className="ArrowIcon" />
        </button>
    )
}

export const Btn3 = ({ btnName }) => {
    return (
        <button className="btn3"> {btnName}
            <span></span>
        </button>
    )
}
export const Btn4 = ({ btnName }) => {
    return (
        <button className="btn4">
            {btnName}
        </button>
    )
}
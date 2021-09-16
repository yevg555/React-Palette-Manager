import React, { useState, createContext } from "react";

export const formatContext = createContext();

export const FormatProvider = (props) => {
    const [format, setFormat] = useState("hex")
    const [level, setLevel] = useState(500)

    const changeFormat = (val) => {
        setFormat(val)
    }

    const changeLevel = (level) => {
        setLevel(level)
    }

    return (
        < formatContext.Provider value={[format, setFormat, changeFormat, level, setLevel, changeLevel]} >
            {props.children}
        </formatContext.Provider >
    )
}
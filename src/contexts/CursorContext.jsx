/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorText, setCursorText] = useState('');

    const onCursor = (hoverState, text = '') => {
        setIsHovered(hoverState);
        setCursorText(text);
    };

    return (
        <CursorContext.Provider value={{ isHovered, cursorText, onCursor }}>
            {children}
        </CursorContext.Provider>
    );
};

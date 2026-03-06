import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCursor } from '../contexts/CursorContext';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { isHovered, cursorText } = useCursor();

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            opacity: 1,
            backgroundColor: '#eb5939',
            mixBlendMode: 'normal',
            transition: {
                type: 'spring',
                mass: 0.1,
                stiffness: 800,
                damping: 30,
            }
        },
        hover: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            opacity: 0,
            backgroundColor: '#eb5939',
            mixBlendMode: 'normal',
            transition: {
                type: 'spring',
                mass: 0.1,
                stiffness: 800,
                damping: 30,
            }
        },
        row: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            opacity: 1,
            backgroundColor: '#050505', // Black cursor for contrast on orange row
            mixBlendMode: 'normal',
            transition: {
                type: 'spring',
                mass: 0.1,
                stiffness: 800,
                damping: 30,
            }
        },
        click: {
            x: mousePosition.x - 27,
            y: mousePosition.y - 27,
            height: 65,
            width: 65,
            opacity: 1,
            backgroundColor: '#050505',
            mixBlendMode: 'normal',
            transition: {
                type: 'spring',
                mass: 0.1,
                stiffness: 800,
                damping: 30,
            }
        },
        contactClick: {
            x: mousePosition.x - 27,
            y: mousePosition.y - 27,
            height: 65,
            width: 65,
            opacity: 1,
            backgroundColor: '#ffffff',
            mixBlendMode: 'normal',
            transition: {
                type: 'spring',
                mass: 0.1,
                stiffness: 800,
                damping: 30,
            }
        },
        hidden: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            height: 20,
            width: 20,
            opacity: 0,
            display: 'none',
            transition: {
                type: 'tween',
                duration: 0,
            }
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[999] flex items-center justify-center font-bold text-center p-4 overflow-hidden"
            variants={variants}
            animate={isHovered === 'hidden' ? 'hidden' : isHovered === 'click' ? 'click' : isHovered === 'contactClick' ? 'contactClick' : isHovered === 'row' ? 'row' : isHovered === 'hover' ? 'hidden' : (isHovered ? 'hover' : 'default')}
        >
            {isHovered && cursorText && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className={`text-[9px] md:text-[10px] tracking-widest break-words ${isHovered === 'contactClick' ? 'text-[#050505]' : 'text-white'}`}
                >
                    {cursorText}
                </motion.span>
            )}
        </motion.div>
    );
};

export default CustomCursor;

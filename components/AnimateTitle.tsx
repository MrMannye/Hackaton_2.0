import React from 'react'
import { motion } from 'framer-motion'

export default function AnimateTitle(props: { text: string, className: string }) {

    const quote = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.8
            }
        }
    }

    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <motion.h1 className={`inline-block w-full text-white font-bold capitalize text-xl ${props.className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    props.text.split(" ").map((word, index) =>
                        <span key={index} className='inline-block'>
                            {word}&nbsp;
                        </span>
                    )
                }
            </motion.h1>
        </div>
    )
}

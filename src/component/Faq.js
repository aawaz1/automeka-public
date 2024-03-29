import React from 'react'


import { useState } from 'react';
import { motion, AnimatePresence, } from 'framer-motion';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        {
            id: 1,
            question: "How Long is Shipping",
            answer: "Shipping is between 1 to 2 days"
        },
        {
            id: 2,
            question: "What If  I Want  refund",
            answer: "Automeka.com does 100% refund if you are not satisfied"
        },
        {
            id: 3,
            question: "How Long is Shipping",
            answer: "Shipping is between 1 to 2 days"
        },
        {
            id: 4,
            question: "How Long is Shipping",
            answer: "Shipping is between 1 to 2 days"
        },
        {
            id: 5,
            question: "What If  I Want  refund",
            answer: "Automeka.com does 100% refund if you are not satisfied"
        },
        {
            id: 6,
            question: "How Long is Shipping",
            answer: "Shipping is between 1 to 2 days"
        }
    ]

    return (
        <> 

            <div className='container w-screen h-screen'>

                <div className='  flex justify-between items-center'>

                    <div className='w-[89%] m-auto max-w-[1440px]   p-1 rounded-md shadow-sm'>
                        <h2 className='text-md mb-6  font-semibold  '>FAQ</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                            {questions.map(q => {
                                return (
                                    <div key={q.id} className=''><button className='w-full text-left text-xl focus:outline:none p-1 bg-white border border-gray-200 rounded-md shadow-md flex justify-between items-center ' onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>{q.question} {activeQuestion === q.id ? <div className='rounded-full bg-orange-500 text-white'><RiArrowDropDownLine style={{}} /></div> : <RiArrowDropUpLine />} </button>
                                        <AnimatePresence>{activeQuestion === q.id && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className='mt-2 text-gray-600 ml-4 '>
                                            <p>{q.answer}</p>
                                        </motion.div>)}</AnimatePresence></div>
                                )
                            })}
                        </div>
                    </div>
                </div>




            </div>
            
        </>)

}

export default FAQ
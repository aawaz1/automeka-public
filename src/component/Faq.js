import React from 'react'


import { useState } from 'react';
import { motion, AnimatePresence, } from 'framer-motion';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import useScrollTop from './customHooks/useScrollToTop';

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
            question: "How is The Exchange Policy",
            answer: "If you would like to exchange an item for a different size, color, or model, please contact our customer service team to arrange an exchange."
        },
        {
            id: 4,
            question: "What If I Get A Defective Product",
            answer: "If you receive a damaged or defective item, please contact our customer service team immediately for assistance."
        },
        // {
        //     id: 5,
        //     question: "What If  I Want  refund",
        //     answer: "Automeka.com does 100% refund if you are not satisfied"
        // },
        {
            id: 6,
            question: "What Items Are Eligible To Return",
            answer: "You may return new, unused items in their original packaging for a refund or exchange. Some items, such as custom-made or special-order items, may not be eligible for return."
        }
    ]

    useScrollTop()

    return (
        <>

            <div className='container w-screen h-screen md:h-[50vh]'>

                <div className=' p-4 flex justify-between items-center'>

                    <div className='w-[89%] m-auto max-w-[1440px]   p-1 rounded-md shadow-sm'>
                        <h2 className='text-[1.5rem] mb-6  font-bold  '>FAQ</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                            {questions.map(q => {
                                return (
                                    <div key={q.id} className=''><button className='w-full text-left font-poppins text-[1.2rem] focus:outline:none p-1 bg-white border border-gray-200 rounded-md shadow-md flex justify-between items-center ' onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>{q.question} {activeQuestion === q.id ? <div className='rounded-full bg-orange-500 text-white'><RiArrowDropDownLine style={{}} /></div> : <RiArrowDropUpLine />} </button>
                                        <AnimatePresence>{activeQuestion === q.id && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className='mt-2 text-gray-600 ml-4 '>
                                            <p className='font-poppins'>{q.answer}</p>
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
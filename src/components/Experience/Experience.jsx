import { useState } from "react"
import { motion , AnimatePresence } from "framer-motion"


export default function Experience(){
    const [seeInfo,setSeeInfo] = useState(false)

    const handleClickMainTasks = () => {
        setSeeInfo(!seeInfo)
    }
    return(
        <div className="w-full contenedor-seccion flex flex-col items-center mb-16">
            <h2 className="w-max px-6 py-2 border-4 font-bold text-sm sm:text-lg tracking-widest mb-8">EXPERIENCE</h2>
            <div className="flex flex-col">
                <div className="flex w-full">
                    <div className="w-2/5" style={{paddingTop:'90px'}}>
                        <p className="font-semibold text-sm text-right sm:text-lg">(January 2023 - Now)</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-1/5">
                        <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.236 0.4872L40.236 80.0603" stroke="black" strokeWidth="5.12" strokeMiterlimit="10"/>
                        </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="black"/>
                            </svg>
                    </div>
                    <div className="flex flex-col w-2/5" style={{paddingTop:'50px'}}>
                        <p className="font-bold text-lg sm:text-xl">
                            Inkua
                        </p>
                        <p className="font-normal text-sm sm:text-lg">
                            -Frontend Developer
                        </p>
                            <p onClick={handleClickMainTasks} className="font-normal sm:hidden text-sm flex gap-2 items-center">
                                -Main Tasks
                                {seeInfo
                                ?
                                <motion.svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM7.29289 11.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929Z" fill="#0F1729"></path> </g>
                                </motion.svg>
                                :<motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 1.33333C3.72115 1.33333 1.33333 3.72115 1.33333 6.66667C1.33333 9.6122 3.72115 12 6.66667 12C9.6122 12 12 9.6122 12 6.66667C12 3.72115 9.6122 1.33333 6.66667 1.33333ZM0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3485 0 13.3333 2.98477 13.3333 6.66667C13.3333 10.3485 10.3485 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3485 0 6.66667ZM6.66667 3.33333C7.03487 3.33333 7.33333 3.63181 7.33333 4V7.72387L8.86193 6.19527C9.12227 5.93493 9.5444 5.93493 9.80473 6.19527C10.0651 6.4556 10.0651 6.87773 9.80473 7.13807L7.13807 9.80473C6.87773 10.0651 6.4556 10.0651 6.19527 9.80473L3.52859 7.13807C3.26825 6.87773 3.26825 6.4556 3.52859 6.19527C3.78895 5.93493 4.21105 5.93493 4.47141 6.19527L6 7.72387V4C6 3.63181 6.29847 3.33333 6.66667 3.33333Z" fill="#0F1729"/>
                                </motion.svg>}
                            </p>
                        <AnimatePresence>
                            {seeInfo && 
                                (<motion.ul className="list-disc"
                                    initial={{height:0}}
                                    animate={{height:'max-content'}}
                                    exit={{height:0}}
                                    transition={{duration:1.5}}
                                >
                                <motion.li
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    exit={{opacity:0}}
                                    transition={{delay:.8}}
                                >
                                        <p className="text-xs">
                                            Website development for Ukrainian aid organization using HTML, CSS and Javascript
                                        </p>
                                    </motion.li>     
                                <motion.li
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    exit={{opacity:0}}
                                    transition={{delay:.8}}
                                >
                                        <p className="text-xs">
                                            Meetings with the design team to improve UX and UI of the site
                                        </p>
                                    </motion.li>     
                                </motion.ul>)}
                        </AnimatePresence>
                            <p className="font-normal">-Main Taks:</p>
                            <motion.ul className="list-disc hidden sm:block">
                                    <li>
                                        <p className="text-sm">
                                            Website development for Ukrainian aid organization using HTML, CSS and Javascript
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-sm">Meetings with the design team to improve UX and UI of the site</p>
                                    </li>
                            </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
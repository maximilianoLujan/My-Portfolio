import { useState } from "react"
import { motion } from "framer-motion"


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
                        <p className="font-semibold text-sm">(January 2023 - Now)</p>
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
                        <p className="font-bold text-lg">
                            Inkua
                        </p>
                        <p className="font-normal text-sm">
                            -Frontend Developer
                        </p>
                        <p onClick={handleClickMainTasks} className="font-normal text-sm flex gap-2 items-center">
                            -Main Tasks
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 1.33333C3.72115 1.33333 1.33333 3.72115 1.33333 6.66667C1.33333 9.6122 3.72115 12 6.66667 12C9.6122 12 12 9.6122 12 6.66667C12 3.72115 9.6122 1.33333 6.66667 1.33333ZM0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3485 0 13.3333 2.98477 13.3333 6.66667C13.3333 10.3485 10.3485 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3485 0 6.66667ZM6.66667 3.33333C7.03487 3.33333 7.33333 3.63181 7.33333 4V7.72387L8.86193 6.19527C9.12227 5.93493 9.5444 5.93493 9.80473 6.19527C10.0651 6.4556 10.0651 6.87773 9.80473 7.13807L7.13807 9.80473C6.87773 10.0651 6.4556 10.0651 6.19527 9.80473L3.52859 7.13807C3.26825 6.87773 3.26825 6.4556 3.52859 6.19527C3.78895 5.93493 4.21105 5.93493 4.47141 6.19527L6 7.72387V4C6 3.63181 6.29847 3.33333 6.66667 3.33333Z" fill="#0F1729"/>
                            </svg>
                        </p>
                        {
                            seeInfo && 
                            <motion.ul className="list-disc">
                               <li>
                                    <p className="text-xs">
                                        Website development for Ukrainian aid organization using HTML, CSS and Javascript
                                    </p>
                                </li>     
                               <li>
                                    <p className="text-xs">
                                        Meetings with the design team to improve UX and UI of the site
                                    </p>
                                </li>     
                            </motion.ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
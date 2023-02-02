import { useState } from "react"
import { motion , AnimatePresence } from "framer-motion"

export default function Navbar(){
    const [menuVisible,setMenuVisible] = useState(false)
    const handleClickMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return(
        <header className="flex flex-col sm:flex-row sm:justify-between relative z-50">
            <div className={menuVisible?"flex justify-between px-4 py-1 border-b-2 border-b-textHero":"flex justify-between px-4 py-1"}>
                <svg className="h-10 w-10" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8649 0.192661C9.99788 1.54128 8.7777 3.80505 8.87403 3.90138C8.93825 3.9656 13.4015 4.04587 18.78 4.06193C27.7066 4.09404 28.5575 4.11009 28.6057 4.35092C28.6378 4.51147 28.3488 5.1055 27.9956 5.69954C27.6263 6.30963 27.2571 6.95184 27.1768 7.12844C27.0804 7.3211 26.9199 7.6422 26.7915 7.85092C26.6791 8.07569 26.6149 8.31651 26.647 8.38073C26.7754 8.58945 35.8626 8.52523 35.8626 8.31651C35.8626 8.22018 35.6538 7.7867 35.3809 7.35321C35.108 6.93578 34.8993 6.51835 34.8993 6.43807C34.8993 6.37385 34.6905 6.00459 34.4176 5.65138C34.1607 5.28211 33.936 4.9289 33.936 4.88073C33.936 4.81651 33.6309 4.25459 33.2456 3.62844C32.8603 3.00229 32.5071 2.37615 32.4428 2.24771C32.3786 2.11927 32.186 1.78211 32.0093 1.52523C31.8327 1.25229 31.608 0.866973 31.5277 0.642202C31.4314 0.433486 31.2548 0.19266 31.1584 0.12844C31.046 0.0642201 26.4704 0 20.9795 0C13.1607 0 10.9612 0.0481653 10.8649 0.192661ZM5.90384 8.87844C5.7754 8.95872 5.5988 9.16743 5.50247 9.36009C5.42219 9.55275 5.29375 9.82569 5.19742 9.95413C4.74788 10.6445 3.59191 12.6514 3.59191 12.7477C3.59191 12.8119 3.46347 13.0528 3.28687 13.2936C3.12632 13.5344 2.58045 14.4495 2.06669 15.3326C1.55292 16.2156 1.07127 16.9541 0.990997 16.9862C0.766226 17.0826 0.846502 17.5642 1.21577 18.1422C1.89008 19.2018 1.97036 19.3463 2.13091 19.6995C2.4199 20.3417 3.11026 21.3532 3.25476 21.3532C3.33503 21.3532 3.57586 21 3.80063 20.5826C4.58733 19.0894 6.48182 15.7982 6.97953 15.0596C7.15614 14.8188 7.28458 14.578 7.28458 14.5298C7.28458 14.4817 7.83045 13.5344 8.4887 12.4266C9.14696 11.3188 9.69283 10.3716 9.69283 10.3073C9.69283 10.2592 9.88549 9.93807 10.1103 9.60092C10.3511 9.26376 10.4956 8.92661 10.4314 8.86238C10.2548 8.70183 6.19283 8.71789 5.90384 8.87844ZM16.6286 8.83028C15.9061 8.91055 15.9061 8.91055 15.1355 10.4358C14.9428 10.8372 14.5415 11.5115 14.2685 11.961C13.9795 12.3945 13.5139 13.1972 13.2249 13.7271C12.936 14.2569 12.6149 14.8028 12.5185 14.9312C12.4222 15.0596 12.1974 15.4289 12.0208 15.7339C11.4589 16.7454 10.9933 17.5642 10.6561 18.1422C10.0782 19.1216 9.66072 19.844 7.79834 23.0872L5.96806 26.25L6.25705 26.8119C6.4176 27.117 6.85109 27.8716 7.22036 28.4977C7.57357 29.1078 7.92678 29.7821 7.991 29.9748C8.05522 30.1835 8.1676 30.344 8.23182 30.344C8.29604 30.344 8.50476 30.6491 8.71348 31.0183C8.90614 31.4037 9.21118 31.9174 9.38779 32.1904C9.54834 32.4472 9.78916 32.8807 9.9176 33.1537C10.046 33.4105 10.3671 33.9404 10.6401 34.3257L11.1378 35H31.0621L31.335 34.5183C31.4795 34.2615 31.6561 34.0367 31.7364 34.0367C31.8006 34.0367 31.8488 33.9564 31.8488 33.8601C31.8488 33.7638 32.0896 33.2661 32.3947 32.7683C32.6837 32.2706 33.1332 31.5 33.374 31.0665C33.6149 30.617 34.3052 29.4289 34.8993 28.4174C38.5598 22.172 38.4956 22.3005 38.2548 22.1399C38.1263 22.0596 37.8213 22.0275 37.5644 22.0757C37.3075 22.1239 36.3603 22.156 35.4612 22.156H33.8075L32.8121 23.8739C32.2662 24.8372 31.2066 26.6353 30.4681 27.8876C29.7295 29.1399 29.1194 30.2317 29.1194 30.328C29.1194 30.8096 28.3809 30.8578 20.8832 30.8417C16.7249 30.8257 13.3213 30.8096 13.3052 30.7775C12.8878 30.2477 10.8167 26.5069 10.8167 26.3142C10.8167 26.1537 11.1378 25.4794 11.5392 24.8372C11.9405 24.1789 12.2616 23.5849 12.2616 23.5367C12.2616 23.4725 12.4382 23.1835 12.663 22.8945C12.8878 22.6055 13.0644 22.3165 13.0644 22.2523C13.0644 22.1881 13.4337 21.5298 13.8671 20.7752C14.3167 20.0206 14.6699 19.3945 14.6699 19.3624C14.6699 19.2982 16.5002 16.1674 17.1584 15.1239C17.3993 14.7546 17.7685 14.1124 17.9772 13.695C18.202 13.2775 18.7479 12.3463 19.1814 11.6078C19.6149 10.8693 19.9681 10.2271 19.9681 10.1628C19.9681 10.1147 20.1607 9.82569 20.3855 9.52064C20.6103 9.2156 20.7548 8.92661 20.7066 8.86238C20.5782 8.73394 17.608 8.71789 16.6286 8.83028Z" fill="white"/>
                    <path d="M23.5163 13.6306C23.2916 13.8875 22.9223 14.4494 22.6975 14.8669C22.1677 15.9105 21.6861 16.7774 17.7044 23.6329C17.3512 24.2109 17.0783 24.7568 17.0783 24.821C17.0783 24.8852 16.9177 25.11 16.7411 25.3027C16.3076 25.7683 16.4361 26.2499 16.9659 26.1054C17.1585 26.0572 19.3099 26.0091 21.7503 26.0091H26.1654L26.5186 25.3187C26.9682 24.4517 27.5301 23.4724 27.8994 22.9265C28.3971 22.1719 28.2526 22.1077 25.8925 22.0916C23.7893 22.0756 23.7411 22.0756 23.6929 21.7224C23.6608 21.4976 23.9659 20.8072 24.4796 19.9563C24.9452 19.1857 25.459 18.2866 25.6195 17.9494L25.9085 17.3394H33.4544C38.1907 17.3394 41.0003 17.2751 41.0003 17.1788C41.0003 17.0022 39.1379 13.8394 38.7847 13.438C38.5599 13.1811 38.0301 13.165 31.2388 13.165L23.9338 13.1811L23.5163 13.6306Z" fill="white"/>
                </svg>
                <button className="sm:hidden" onClick={handleClickMenu}>
                {menuVisible
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="text-textHero w-10 h-10 bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    :<svg className="w-10 h-10 bi bi-list text-textHero" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>}
                </button>
            </div>
            <div className="hidden sm:flex items-center">
                <ul className="text-textHero w-full flex">
                    <li className="p-2"><a className="px-4 py-2  text-textHero font-semibold text-sm md:text-base" href="#aboutme">About me</a></li>
                    <li className="p-2"><a className="px-4 py-2  text-textHero font-semibold" href="#skills">Skills</a></li>
                    <li className="p-2"><a className="px-4 py-2  text-textHero font-semibold text-sm md:text-base" href="#portfolio">Portfolio</a></li>
                    <li className="p-2"><a className="px-4 py-2  text-textHero font-semibold text-sm md:text-base" href="#experience">Experience</a></li>
                    <li className="p-2"><a className="px-4 py-2 rounded-full  text-black bg-textHero font-semibold text-sm md:text-base" href="#contactme">Contact me</a></li>
                </ul>
            </div>
            <AnimatePresence>
                {menuVisible &&
                (<motion.div 
                    initial={{ height: '0px' }}
                    animate={{ height: '706px' }}
                    exit={{ height: '0px' }}
                    transition={{duration:0.5}}
                className="absolute w-full sm:hidden myImage" style={{top:'51px',backgroundImage:'url(paisaje_1280.jpg)',backgroundPosition:'inherit',backgroundAttachment:'fixed'}}>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{opacity:0}}
                    transition={{duration:0.3}}
                    >
                        <nav 
                        className="flex flex-col items-center gap-4 opacity-90 bg-blackNavbar mb-4">
                            <ul className="text-textHero w-full">
                                <li className="w-full py-2"><a className="text-center font-semibold w-full block" href="#aboutme">About me</a></li>
                                <li className="w-full py-2"><a className="text-center font-semibold w-full block" href="#skills">Skills</a></li>
                                <li className="w-full py-2"><a className="text-center font-semibold w-full block" href="#portfolio">Portfolio</a></li>
                                <li className="w-full py-2"><a className="text-center font-semibold w-full block" href="#experience">Experience</a></li>
                                <li className="w-full py-2"><a className="text-center font-semibold w-full block" href="#contactme">Contact me</a></li>
                            </ul>
                        </nav>
                        <div 
                            className="pt-6 pb-40 flex flex-col items-center">
                            <h2 className="text-medium text-textHero text-xl">My name is Maxi</h2>
                            <h1 className="text-3xl font-bold text-textHero mb-4">I'm a developer</h1>
                            <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="120" height="10" fill="url(#pattern0)"/>
                                <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_6_41" transform="matrix(0.00694444 0 0 0.0833333 -0.0902778 0)"/>
                                </pattern>
                                <image id="image0_6_41" width="170" height="12" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAMCAYAAADyMyZxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEREY5RkIxMDE1QTMxMUU0ODM4RkI1MUU1M0E5RDQ1OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEREY5RkIxMTE1QTMxMUU0ODM4RkI1MUU1M0E5RDQ1OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRjBBMzg5MTU5MjExRTQ4MzhGQjUxRTUzQTlENDU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYzRjBBMzhBMTU5MjExRTQ4MzhGQjUxRTUzQTlENDU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+43cJ+gAAAvNJREFUeNrsmU1IFGEYx1dTV1PXNiKIIqIP+7xEiX0IEd0KCgKJQoJCiE7d+gCrQ7QUeYiu0qGsKKEIS6JjBWUlVocKQg+uoislVl4yWaf/Y0/09DLPO7PbaWb2gR/O4/5n5p19//O8HxtzHCcWAarAJVDkoSsFV0CJh64YtIKKPNtD7UiBGh/aY2CRD91eUBfWPoyCSatB2vkd7Razkklfse6Zxaxk0rus6wOz8zBpG58/6mHWE6ybBIstukbnb9SHsR+LY+GPUlDBx03gJihy0ZWAaj5uAE/4f2bQuUk+XgY+gEqfbaFzr4JmzstBmaI9BS6Itmn32Ac6RJ4IZS9GZOhPgs+i6tzmymjqysFHoXvBldbUzQKPhY4qdqWPSnpdnDMO5inaFqHLgpWKbr/zb+woDP3BZ45h1g7FrHHwXui6LWZ9ZJi1ymLSdqEds5j0rNBNgVpF12SYdHuY+4++wNUBHhCmQF8O+hrwCczn/B5oBNOGLg56wDrOX4OtfD8ZNHV6AHZyPgjWggljuL8BDnD+BawCYy7tOwda+PgnWAP6XXQHwTWRbwNPPZ59OU+DAjv0BznSebydtHjJiGvct1TWd0LXA8qUxdVDoRsCCVFJb4nPqKLPVdp1Xuho8bRU0R0yvoMGn8+dDnJHR9GoMTbSsLhOp2JWMmav0PVazNopdHTtBTwXliZNKu1JGSZdougOG8+/JYdnDrRR6Y3fFOChfxK8yfPcBK/YF3LeBXa7TANoVf4cbOD8LajnodmcBtBUYo/LvWi4XwG+unx2ERwXw30tGHDR0U5Bm8g3g+4cnnc9T2kKq/6A77FSdCmVVe6xOjwliHvssf6JjGWvtNWopNpe6RHjmnVR66so7KPaYoIXLIOcj9K7qyzaaDH1kvNxkHXRTfPi7A7nI1whvyn3H+G/P3hPNq3oMuJ4Iy/uIhUzv9IUYmYz/SQ4oxhV/niQYm3WY2P/MjgNvnvc+yjvHAx56HaB4f+Y6gQ6fgkwADEHblde1S+LAAAAAElFTkSuQmCC"/>
                                </defs>
                            </svg>
                            <div className="flex w-max mt-4">
                                <a className="mr-4" href="maxylujan1@outlook.com" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 text-textHero h-6 bi bi-envelope-at" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                                    </svg>
                                </a>
                                <a className="mr-4" href="https://github.com/maximilianoLujan" target='_blank' rel="noopener">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 text-textHero h-6 bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/maximiliano-lujan/" rel='noopener' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 text-textHero h-6 bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>)}

            </AnimatePresence>
        </header>
    )
}
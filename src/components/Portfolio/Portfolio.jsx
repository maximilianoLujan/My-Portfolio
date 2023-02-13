import "./Portfolio.css"
import projects from "../../constants/projects"


export default function Portfolio(){


    const openUrl = (url) => {
        window.open(url)
    }

    return(
        <div id="portfolio" className="w-full flex flex-col items-center">
            <div className="fondo w-full flex flex-col items-center justify-center h-36">
                <h2 className="w-max px-6 py-2 border-4 font-bold text-sm sm:text-lg tracking-widest mb-8">PORTFOLIO</h2>
            </div>
            <div className="flex flex-col md:flex-row fondo">
                {projects.map(el => {
                    return(
                        <div key={el.id} className="relative m-4">
                            <img src={el.img} alt={el.name} />
                            <div className="cursor-pointer absolute flex items-center justify-evenly h-14 w-full bottom-0 bg-blackNavbar opacity-80">
                                <div onClick={() => openUrl(el.url)} className="flex gap-4 items-center">
                                    <h4 className="text-textHero">DEPLOY</h4>
                                    <svg width="26" height="26" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M61.3333 2.66668C61.3333 2.66668 43.925 1.44457 37.3333 8.00002C37.2712 8.0983 26.6666 18.6667 26.6666 18.6667L13.3333 21.3334L5.33331 26.6667L26.6666 37.3333L37.3333 58.6667L42.6666 50.6667L45.3333 37.3333C45.3333 37.3333 55.9017 26.7288 56 26.6667C62.5554 20.075 61.3333 2.66668 61.3333 2.66668ZM45.3333 21.3334C43.86 21.3334 42.6666 20.14 42.6666 18.6667C42.6666 17.1934 43.86 16 45.3333 16C46.8066 16 48 17.1934 48 18.6667C48 20.14 46.8066 21.3334 45.3333 21.3334ZM18.6666 45.3333C16 42.6667 10.6666 42.6667 7.99998 45.3333C5.33331 48 5.33331 58.6667 5.33331 58.6667C5.33331 58.6667 16 58.6667 18.6666 56C21.3333 53.3334 21.3333 48 18.6666 45.3333Z" stroke="white" strokeWidth="5.33333"/>
                                    </svg>
                                </div>
                                <div onClick={() => openUrl(el.code)} className="cursor-pointer flex gap-4 items-center">
                                    <h4 className="text-textHero">CODE</h4>
                                    <svg width="26" height="26" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 18.6666L10.6666 32L24 45.3333" stroke="white" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M40 18.6666L53.3333 32L40 45.3333" stroke="white" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            
            <div className="bg-bg-portfolio w-full">
                <p className="text-textHero text-base font-semibold text-center my-2">And many more to come!!</p>
            </div>
        </div>
    )
}
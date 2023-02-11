import "./Portfolio.css"

export default function Portfolio(){
    return(
        <div className="w-full flex flex-col items-center">
            <div className="fondo w-full flex items-center justify-center h-36">
                <h2 className="w-max px-6 py-2 border-4 font-bold text-sm sm:text-lg tracking-widest mb-8">PORTFOLIO</h2>
            </div>
            
            
            <div className="bg-bg-portfolio w-full">
                <p className="text-textHero text-base font-semibold text-center my-2">And many more to come!!</p>
            </div>
        </div>
    )
}
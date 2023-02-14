import techs from "../../constants/techs"

export default function Skills(){
    return(
        <div id="skills" className="w-full flex flex-col items-center">
            <h2 className="mt-6 w-max px-6 py-2 border-4 font-bold text-sm sm:text-lg tracking-widest mb-8">SKILLS</h2>
            <div>
                <div className="mb-6">
                    <h3 className=" pl-8 font-bold text-xl text-left">Using Now:</h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 max-[600px]:grid-cols-2">
                        {techs.map(tec => {
                            if (tec.done == true){
                                return(
                                    <div key={tec.id} className="p-8 flex flex-col gap-4 items-center">
                                        {tec.svg}
                                        <p className="text-base">{tec.name}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div>
                    <h3 className="pl-8 font-bold text-xl text-left">Learning:</h3>
                    <div className="flex gap-4">
                        {techs.map(tec => {
                            if (tec.done == false){
                                return(
                                    <div key={tec.id} className="p-8 flex flex-col items-center">
                                        {tec.svg}
                                        <p className="text-base">{tec.name}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
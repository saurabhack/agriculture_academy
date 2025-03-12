function Navbar(){
    return(
        <>
        <nav className="w-[100vw] h-[10vh] bg-amber-50 flex justify-center items-center">
            <div className="w-[20%] flex justify center">
            <button className="flex gap-2 border-b-2 border-blue-400">
                <span className="text-xl font-medium text-blue-400">
                    Explore
                </span>
                <span className="text-2xl font-medium text-blue-400">
                ^
                </span>
            </button>
            </div>
            <div className="w-[20%] flex justify center h-[50%]">
            <input type="text" placeholder="Search here" className="border p-2 " />
            <button className="border border-black pl-4 pr-4">Search</button>
            </div>
        </nav>
        </>
    )
}
export default Navbar

const Navbar = () => {
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between item-center">
                    <p className="font-bold text-2xl px-2 my-4">
                        Rails Challenge
                    </p>
                    <div>
                        <button className="bg-blue-500 rounded px-2 py-1.5 my-4">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar
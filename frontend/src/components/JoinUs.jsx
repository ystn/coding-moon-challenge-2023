const JoinUs = () => {
    return (
        <section className="flex max-w-5xl m-auto mt-20 space-x-28 mb-10 relative">
            <div className="max-w-lg flex flex-col space-y-11">
                <h1 className="text-5xl font-bold lead text-[#473C33]">JOIN US</h1>
                <p className="text-xl">Our cutting-edge alert system will notify you when hornets are present in your area. Stay safe and avoid hornet attacks with our real-time map that shows hornet hotspots. Don't let hornets catch you off guard - <b>sign up today and be prepared!</b></p>
            </div>
            <div className="flex flex-col glass py-4 px-8 z-10">
                <h2 className="text-2xl text-[#473C33] mb-2">Sign up</h2>
                <p className="text-[#473C33] font-semibold mb-1 mt-2">Name</p>
                <input className="px-6 py-2 border rounded w-80" type="text" placeholder="Enter your name" />
                <p className="text-[#473C33] font-semibold mb-1 mt-2">Email</p>
                <input className="px-6 py-2 border rounded w-80" type="text" placeholder="Enter your email" />
                <p className="text-[#473C33] font-semibold mb-1 mt-2">Password</p>
                <input className="px-6 py-2 border rounded w-80" type="text" placeholder="Enter a password" />
                <button className="bg-[#1F593A] text-white mt-3 font-semibold py-3 px-6 rounded">Create an account</button>
            </div>
            <img className="absolute -z-10 h-[220px] w-[264px] -right-28 -top-28" src="https://pngimg.com/uploads/bee/bee_PNG74646.png" alt="bee" />
        </section>
    )
}

export default JoinUs
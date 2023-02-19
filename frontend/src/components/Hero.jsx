const Hero = () => {
    // from-[#DDDCDB] to-[#FFDD9C]
    return (
        <section className="flex space-x-28 max-w-5xl mx-auto mt-20 relative">
            <div className="max-w-lg flex flex-col space-y-11">
                <h1 className="text-5xl font-bold lead text-[#473C33]">STAY SAFE FROM HORNETS</h1>
                <p className="text-xl">Our cutting-edge alert system will notify you when hornets are present in your area. Stay safe and avoid hornet attacks with our real-time map that shows hornet hotspots. Don't let hornets catch you off guard - <b>sign up today and be prepared!</b></p>
                <button className="bg-[#1F593A] text-white w-fit font-semibold py-3 px-6 rounded">Join the community!</button>
            </div>
            <div className="relative">
                <img className="h-[489px] w-[411px]" src="https://cdn.discordapp.com/attachments/311564936004370434/1076729099634098217/Group_1.png" alt="hero" />

            </div>
            <div className="bg-bee-pattern absolute h-full w-full -z-10 "></div>
        </section>
    )
}

export default Hero
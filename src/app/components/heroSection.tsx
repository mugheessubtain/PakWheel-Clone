export default function HeroSection(){
    return(
        <>
        <h1 className="text-center text-2xl  m-10">Sell your Car on PakWheels and Get the Best Price</h1>
        <div className="flex justify-evenly items-center">

        <div>
        <h2 className="text-xl m-2 text-indigo-700 font-bold">Post your Ad on PakWheels</h2>
        <ul className="m-6">
            <li>Post your Ad for Free in 3 Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell your car Fast at the Best Price</li>
        </ul>
        <button className="bg-red-600 rounded-md text-white p-2 w-40">Post an Add</button>
        </div>
        <div><p className="text-xl text-indigo-500">OR</p></div>
        <div>
        <h2 className="text-xl m-2 text-indigo-700 font-bold">Try PakWheels Sell It For Me</h2>
        <ul className="m-6">
            <li>Dedicated Sales Experts to Sell your Car</li>
            <li>We Bargain for you and share the Best Offer</li>
            <li>We ensure Safe & Secure Transaction</li>
        </ul>
        <button className="bg-blue-600 rounded-md text-white p-2 w-40">Register your Car</button>
        </div>
        </div>

        </>
    )
}
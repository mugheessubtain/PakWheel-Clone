import Image from "next/image";


export default function Navbar() {
    return (
        <div>

        <div className="flex bg-black justify-between px-32  items-center text-white">
           <div className="text">
                <p>Download App via SMS</p>
           </div>
                <ul className="flex  justify-evenly w-56">
                    <li>اردو</li>
                    <li>SignUp</li>
                    <li>Signin</li>

                </ul>
        </div>
        <hr className="border-gray-700 border-t w-full items-center" />
        <div className="bg-black w-full h-14 px-10 py-2 flex justify-evenly items-center">
        <div >
                <Image
                    src="/logo2.png"
                    alt="pakwheel logo"
                    width={160}
                    height={160}
                ></Image>
            </div>
            <ul className="text-white flex justify-evenly w-3/5">
                <li>Used Cars</li>
                <li>New Cars</li>
                <li>Bikes</li>
                <li>Auto Store</li>
                <li>Videos</li>
                <li>Forums</li>
                <li>Blogs</li>
                <li>More</li>
            </ul>
            <div>
                <button className="bg-red-600 rounded-md text-white p-2">Post an Add</button>
            </div>
        </div>

       







        </div>

    )
}
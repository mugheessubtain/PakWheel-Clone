import Image from "next/image";
import Link from "next/link";


export default function Featuring() {
    return (
        <div className="mt-10 flex justify-center text-nowrap bg-gray-100 ">
            <div className="w-4/5 mb-20">

                <div className="flex justify-between my-10">
                    <h1 className="text-2xl font-bold">Featured New Cars</h1>
                    <p className="text-blue-400">View All New Cars</p>
                </div>


                <ul className="flex justify-start gap-16 mt-6">
                    <li className="cursor-pointer text-xl hover:border-blue-400 border-b-4 hover:font-bold">Popular</li>
                    <li className="cursor-pointer text-xl hover:border-blue-400 border-b-4 hover:font-bold">Upcoming</li>
                    <li className="cursor-pointer text-xl hover:border-blue-400 border-b-4 hover:font-bold">Newly Launched</li>
                </ul>
                <hr className="border-gray-300 border-t w-full items-center" />




                <div className="flex justify-start gap-24 mt-10 ">
                    <Link href={"/cars/Corolla"}>
                        <div className=" bg-white rounded-md p-4 hover:cursor-pointer">
                            <Image
                                src="/Corolla.jpg"
                                alt="pakwheel logo"
                                width={200}
                                height={200}
                            ></Image>
                            <div className="text-center">


                                <h1 className="text-indigo-800 font-bold">Toyota Corolla</h1>
                                <p className="text-green-500">PKR 59.7-75.5 lacs</p>
                                <p>621 Reviews</p>
                            </div>

                        </div>
                    </Link>
                    <Link href={"/cars/Alto"}>

                        <div className="bg-white rounded-md p-4 hover:cursor-pointer">
                            <Image
                                src="/alto.png"
                                alt="pakwheel logo"
                                width={200}
                                height={200}
                            ></Image>

                            <div className="text-center">
                                <h1 className="text-indigo-800 font-bold">Suzuki Alto</h1>
                                <p className="text-green-500">PKR 23.3-30.5 lacs</p>
                                <p>199 Reviews</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/cars/City"}>

                        <div className=" bg-white rounded-md p-4 hover:cursor-pointer">
                            <Image
                                src="/City.jpg"
                                alt="pakwheel logo"
                                width={200}
                                height={200}
                            ></Image>
                            <div className="text-center">

                                <h1 className="text-indigo-800 font-bold">Honda City</h1>
                                <p className="text-green-500">PKR 46.5-58.5 lacs</p>
                                <p>458 Reviews</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/cars/Civic"}>
                        <div className=" bg-white rounded-md p-4 hover:cursor-pointer">
                            <Image
                                src="/civic.jpg"
                                alt="pakwheel logo"
                                width={200}
                                height={200}
                            ></Image>
                            <div className="text-center">

                                <h1 className="text-indigo-800 font-bold">Honda Civic</h1>
                                <p className="text-green-500">PKR 86.6-99.0 lacs</p>
                                <p>357 Reviews</p>
                            </div>
                        </div>
                    </Link>


                </div>



            </div>

















        </div>
    )
}
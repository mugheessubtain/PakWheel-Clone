"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface Params {
    cars: string[];
}

interface DetailsProps {
    params: Promise<Params>;
}
export default function Details({ params: cars }:DetailsProps   ) {
    const route = useRouter();
    const [carParam, setCarParam] = useState<string | null>(null); 

    useEffect(() => {
        async function resolveParams() {
            const resolvedParams = await cars; 
            setCarParam(resolvedParams.cars[1]); 
        }
        resolveParams();
    }, [cars]);

    if (!carParam) return <div>Loading...</div>;

    return (
        <div>
            <h1 className="text-indigo-800 font-bold text-3xl mt-10 text-center">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            <div className="flex justify-evenly w-full items-center">


                {carParam === "Corolla" && (
                    <div className="text-center">
                        <p className="text-green-500 mb-2">PKR <span className="text-3xl">59.7-75.5 lacs</span></p>
                        <p className="text-xl"><span className="font-bold">Engine:</span> 1800CC</p>
                        <p className="text-xl"><span className="font-bold">Condition:</span> 8.5/10</p>
                        <p className="text-xl"><span className="font-bold">Driven:</span> 9500KM</p>
                        <p className="text-xl"><span className="font-bold">Suspension Type:</span> Soft Suspension</p>
                        <p className="text-xl"><span className="font-bold">Average:</span> 13Km per litre </p>
                        <p className="text-xl"><span className="font-bold">Trnasmission:</span> Automatic </p>
                        <p className="text-xl"><span className="font-bold">Fuel Type:</span> High Octane </p>
                    </div>

                )}
                {carParam === "Civic" && (
                        <div className="text-center">
                        <p className="text-green-500 mb-2">PKR <span className="text-3xl">86.6-99.0 lacs</span></p>
                        <p className="text-xl"><span className="font-bold">Engine:</span> 1500CC</p>
                        <p className="text-xl"><span className="font-bold">Condition:</span> 10/10</p>
                        <p className="text-xl"><span className="font-bold">Driven:</span> 8000KM</p>
                        <p className="text-xl"><span className="font-bold">Suspension Type:</span> Soft Suspension</p>
                        <p className="text-xl"><span className="font-bold">Average:</span> 15Km per litre </p>
                        <p className="text-xl"><span className="font-bold">Trnasmission:</span> Automatic </p>
                        <p className="text-xl"><span className="font-bold">Fuel Type:</span> High Octane </p>
                    </div>
                )}
                {carParam=== "City" && (
                        <div className="text-center">
                        <p className="text-green-500 mb-2">PKR <span className="text-3xl">46.5-58.5 lacs</span></p>
                        <p className="text-xl"><span className="font-bold">Engine:</span> 1500CC</p>
                        <p className="text-xl"><span className="font-bold">Condition:</span> 9.5/10</p>
                        <p className="text-xl"><span className="font-bold">Driven:</span> 1000KM</p>
                        <p className="text-xl"><span className="font-bold">Suspension Type:</span> Soft Suspension</p>
                        <p className="text-xl"><span className="font-bold">Average:</span> 10Km per litre </p>
                        <p className="text-xl"><span className="font-bold">Trnasmission:</span> Automatic </p>
                        <p className="text-xl"><span className="font-bold">Fuel Type:</span> High Octane </p>
                    </div>
                )}
                {carParam === "Alto" && (
                     <div className="text-center">
                     <p className="text-green-500 mb-2">PKR <span className="text-3xl">23.3-30.5 lacs                                                   </span></p>
                     <p className="text-xl"><span className="font-bold">Engine:</span> 658CC</p>
                     <p className="text-xl"><span className="font-bold">Condition:</span> 9/10</p>
                     <p className="text-xl"><span className="font-bold">Driven:</span> 8500KM</p>
                     <p className="text-xl"><span className="font-bold">Suspension Type:</span> Soft Suspension</p>
                     <p className="text-xl"><span className="font-bold">Average:</span> 20Km per litre </p>
                     <p className="text-xl"><span className="font-bold">Trnasmission:</span> Automatic </p>
                     <p className="text-xl"><span className="font-bold">Fuel Type:</span> High Octane </p>
                 </div>
                )}


                <div>
                    <div>
                        {carParam=== "Corolla" && (
                            <Image
                                src="/Corolla.jpg"
                                alt="Toyota Corolla"
                                width={500}
                                height={500}
                            />
                        )}
                        {carParam=== "Civic" && (
                            <Image
                                src="/civic.jpg"
                                alt="Honda Civic"
                                width={500}
                                height={500}
                            />
                        )}
                        {carParam === "City" && (
                            <Image
                                src="/city.jpg"
                                alt="Toyota Camry"
                                width={500}
                                height={500}
                            />
                        )}
                        {carParam=== "Alto" && (
                            <Image
                                src="/alto.png"
                                alt="Honda Accord"
                                width={500}
                                height={500}
                            />
                        )}
                    </div>


                </div>

            </div>
            <div className="flex justify-center m-10">

                <button className="bg-blue-600 rounded-md text-white p-2 w-60 text-center " onClick={()=>{

                route.push("/payment")
                }}>Make a Payment</button>
            </div>
        </div>
    )
}
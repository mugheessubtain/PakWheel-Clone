"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function MakePayment(){
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [cardNumber,setCardNumber]=useState("")
    const [address,setAddress]=useState("")

    const route=useRouter();

   
    const resetInput = () => {
        setUserName("");
        setEmail("");
        setCardNumber("");
        setAddress("");
       
    };

    const allData = () => {
        
        const data = {
            userName,
            email,
            cardNumber,
            address
          
        };
        resetInput()
        console.log(data);
        route.push("/thanks")
    };

    
    return(
        <div className="flex justify-center items-center  mb-20 ">
            
        <div className=" w-96 bg-gray-100 p-8 rounded-lg shadow-lg mt-20">
    <div className="max-w-sm w-full text-left">
        <h3 className="text-2xl font-semibold mb-5 text-gray-800">Please enter your Details</h3>
        
        <label htmlFor="userName" className="block mb-4 font-medium text-gray-600">
            <input
                type="text"
                placeholder="Enter your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
            />
        </label>
        
        <label htmlFor="email" className="block mb-4 font-medium text-gray-600">
            <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
            />
        </label>
        
        <label htmlFor="cardNumber" className="block mb-4 font-medium text-gray-600">
            <input
                type="text"
                placeholder="Enter your Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
            />
        </label>
        
        <label htmlFor="address" className="block mb-4 font-medium text-gray-600">
            <input
                type="text"
                placeholder="Enter your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
            />
        </label>
        
        <button className="mt-4 px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 w-80" onClick={allData}>
            Place an Order
        </button>
    </div>
</div>
</div>


    )
}
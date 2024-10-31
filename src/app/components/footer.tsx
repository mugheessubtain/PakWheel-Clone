import Link from "next/link";

export default function Footer(){
    return(

        <div className="bg-gray-800 h-32 w-full m-0 flex justify-center items-center ">
            <div className="text-center text-gray-400">
                <Link href="https://www.linkedin.com/in/mughees-subtain-17aab72ba/">
            <h1>Developed by M.Mughees</h1>
                </Link>
                
            <p>mugheessubtain@gmail.com</p>
            
            </div>
        </div>
    )
}
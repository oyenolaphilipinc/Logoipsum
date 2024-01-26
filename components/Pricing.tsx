import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
    <div className={"mt-16 mb-12"}>
        <div className={"ml-3 info sm:flex sm:justify-around mb-16"}>
            <h1 className={"text-4xl font-bold"}>Get the right plan<br/> for future product</h1>
            <div className={"button mt-6"}>
                <button className={"border px-6 py-2 bg-[#5454d4] text-sm rounded-l-md text-white font-medium mr-6"}>Yearly</button>
                <button className={"text-sm font-medium"}>Monthly</button>
            </div>
        </div>
        <div className={"cards sm:flex sm:justify-center"}>
            <div className={"border mb-2 w-12/12 sm:w-2/12 text-center rounded-l-md border-gray-100 bg-gray-100"}>
                <p className={"mt-6 mb-3 text-gray-800 text-sm"}>Starter</p>
                <h1 className={"text-3xl font-semibold mb-3"}>Free</h1>
                <p className={"mb-3 text-gray-800 text-sm"}>1 Website</p>
                <p className={"mb-3 text-gray-800 text-sm"}>5 GB Hosting</p>
                <p className={"mb-8 text-gray-800 text-sm"}>Limited Support</p>
                <Link href="/get-started" className={"text-sm text-[#5454d4] font-medium"}>Get Started</Link>
            </div>
            <div className={"border mb-2 w-12/12 sm:w-2/12 text-center bg-[#ff7143] rounded-md text-white"}>
                <p className={"mt-6 mb-3 text-sm"}>Premium</p>
                <h1 className={"text-3xl font-bold mb-3"}>$29/month</h1>
                <p className={"mb-3 text-sm"}>10 Website</p>
                <p className={"mb-3 text-sm"}>15 GB Hosting</p>
                <p className={"mb-8 text-sm"}>Premium Support</p>
                <Link href="/get-started" className={"border px-10 py-2 bg-[#9f3919] border-[#ff7143] text-sm font-bold rounded-md"}>Get Started</Link>
                <p className={"mt-4 text-[#ff7143]"}>Sharp</p>
            </div>
            <div className={"border w-12/12 sm:w-2/12 text-center rounded-r-md border-gray-100 bg-gray-100"}>
                <p className={"mt-6 mb-3 text-gray-800 text-sm"}>Enterprise</p>
                <h1 className={"text-3xl font-semibold mb-3"}>$49/month</h1>
                <p className={"mb-3 text-gray-800 text-sm"}>Unlimited Website</p>
                <p className={"mb-3 text-gray-800 text-sm"}>50 GB Hosting</p>
                <p className={"mb-8 text-gray-800 text-sm"}>Premium Support</p>
                <Link href="/get-started" className={"text-sm text-[#5454d4] font-medium"}>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing
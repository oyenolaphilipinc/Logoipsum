import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Benefit = () => {
  return (
    <div className={"mt-16"}>
        <div className={"ml-2 sm:flex sm:justify-around sm:mb-8"}>
            <div className={"mr-4"}>
                <Image 
                    src={"/image/analytics.svg"}
                    width={300}
                    height={300}
                    alt={"Analytics"}
                />
            </div>
            <div className={"mt-16"}>
                <h1 className={"text-4xl font-bold mb-6 text-gray-900"}>Subscription Index</h1>
                <p className="text-md text-gray-800 mb-4">A daily dataset to keep you up to date on<br/> subscription market trends and what's happening in<br/> your vertical.</p>
                <Link href="/learn" className={"text-sm text-[#5454d4] font-medium"}>Learn more</Link>
            </div>
        </div>
        <div className={"ml-2 sm:flex sm:justify-around"}>
            <div className={"mt-32"}>
                <h1 className={"text-4xl font-bold mb-6 text-gray-900"}>In-depth Metrics</h1>
                <p className="text-md text-gray-800 mb-4">Accurate, real-time reporting at your fingertips.<br/> Getting data has never been easier</p>
                <Link href="/learn" className={"text-sm text-[#5454d4] font-medium"}>Learn more</Link>
            </div>
            <div className={"mt-4"}>
                <Image 
                    src={"/image/metrics.svg"}
                    width={300}
                    height={300}
                    alt={"Analytics"}
                />
            </div>
        </div>
    </div>
  )
}

export default Benefit
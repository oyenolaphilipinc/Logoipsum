import Image from 'next/image'
import React from 'react'

const Analytics = () => {
  return (
    <div className={"sm:flex sm:justify-around mt-12"}>
        <div>
            <Image 
                src={"/image/benchmark.svg"}
                alt={"benchmark"}
                width={150}
                height={150}
                className="mb-4 mx-auto"
            />
            <h1 className="mb-4 text-2xl font-medium text-center">Benchmarks</h1>
            <p className="text-md sm:text-sm text-gray-800">See how you stack up against comparable<br/> <span className={"ml-10"}>companies in similar stages</span></p>
        </div>
        <div>
            <Image 
                src={"/image/audit.svg"}
                alt={"benchmark"}
                width={150}
                height={150}
                className="mb-4 mx-auto"
            />
            <h1 className="mb-4 text-2xl font-medium text-center">Pricing Audit</h1>
            <p className="text-sm text-gray-800">See how you stack up against comparable<br/> <span className={"ml-12"}>companies in similar stages</span></p>
        </div>
        <div>
            <Image 
                src={"/image/retention.svg"}
                alt={"benchmark"}
                width={150}
                height={150}
                className="mb-4 mx-auto"
            />
            <h1 className="mb-4 text-2xl font-medium text-center">Retension Audit</h1>
            <p className="text-sm text-gray-800">See how you stack up against comparable<br/> <span className={"ml-12"}>companies in similar stages</span></p>
        </div>
    </div>
  )
}

export default Analytics
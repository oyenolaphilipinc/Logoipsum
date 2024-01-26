import Image from 'next/image'
import React from 'react'

const Iconify = () => {
  return (
    <div className={"hidden sm:flex sm:justify-around mt-12"}>
        <Image 
            src={"/image/gloop.svg"}
            width={100}
            height={100}
            alt={"samad"}
        />
        <Image 
            src={"/image/cloop.svg"}
            width={100}
            height={100}
            alt={"samad"}
        />
        <Image 
            src={"/image/shoop.svg"}
            width={80}
            height={100}
            alt={"samad"}
        />
        <Image 
            src={"/image/cakeo.svg"}
            width={100}
            height={100}
            alt={"samad"}
        />
        <Image 
            src={"/image/rocketio.svg"}
            width={100}
            height={100}
            alt={"samad"}
        />
    </div>
  )
}

export default Iconify
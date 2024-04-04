import Image from "next/image"


const AboutUs = () => {
    return (
     <main className='w-[100vw] bg-[#f8f8ff] pt-[30px] 
     flex flex-col  gap-3 md:justify-center md:align-middle
     '>
        <div className='w-[100vw]  mt-[30px] 
     flex flex-col md:flex-row-reverse gap-5 md:justify-center md:align-middle
     '>
        <div className='flex flex-col gap-3 p-5'>
           <h1 className="font-bold text-[1.7rem]"> 
             Why Choose Us Right?
            </h1>
            <p className="">
                We offer instant recharge of Airtime, Databundle, Electricity Bill payment, Scratch card (WAEC and NECO) and more...
            </p>
        </div>
        <div className="flex sm:hidden">
        <Image
           src='/services.png'
           height={530}
           width={530}
           alt='about-us'
        />
        </div>
     </div>
     <div className='flex flex-col px-5 text-[black] gap-4 align-middle relative'>
          <div className='flex flex-row gap-3 align-bottom text-center'>
            <div className="flex align-middle">
              <Image
                src='/check.png'
                alt='agent'
                height={40}
                width={40}
                className="flex align-middle"
              />
            </div>
            <div className=" flex  align-middle text-[20px] text-semibold">We're Fast</div>
          </div>
          <div className='flex flex-row gap-3'>
            <div className="flex align-middle">
              <Image
                src='/check.png'
                alt='agent'
                height={40}
                width={40}
                className="flex align-middle"
              />
            </div>
            <div className=" flex  align-middle text-[20px] text-semibold">We're Reliable</div>
          </div><div className='flex flex-row gap-3'>
            <div className="flex align-middle">
              <Image
                src='/check.png'
                alt='agent'
                height={40}
                width={40}
                className="flex align-middle"
              />
            </div>
            <div className=" flex  align-middle text-[20px] text-semibold">Automated Services</div>
          </div><div className='flex flex-row gap-3'>
            <div className="flex align-middle">
              <Image
                src='/check.png'
                alt='agent'
                height={40}
                width={40}
                className="flex align-middle"
              />
            </div>
            <div className=" flex  align-middle text-[20px] text-semibold">100% Secured</div>
          </div><div className='flex flex-row gap-3'>
            <div className="flex align-middle">
              <Image
                src='/check.png'
                alt='agent'
                height={40}
                width={40}
                className="flex align-middle"
              />
            </div>
            <div className=" flex  align-middle text-[20px] text-semibold">Always active</div>
          </div><div className='flex flex-row gap-3'>
            <div className="flex align-middle">
              <Image
                src='/check.png'
                alt='agent'
                height={40}
                width={40}
                className="flex align-middle"
              />
            </div>
            <div className=" flex  align-middle text-[20px] text-semibold">24/7 Customer Support</div>
          </div>
        </ div> 
     </main>
    )
}

export default AboutUs
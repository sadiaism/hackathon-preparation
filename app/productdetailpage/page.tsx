import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='ml-[135px] mt-[100px] mobile:ml-[50px]'>

     {/* 1st */}
        <div>Account / Gaming / Havic HV G-92 Gamepad</div>


      {/* 2nd */}
        <div className='flex gap-[30px] mt-[50px] mobile:flex-col'>
            {/* 1st */}
            <div className='flex flex-col gap-[16px] w-[170px] h-[600px]'>
              <Image src={"/images/gamepadW1.svg"} alt="game"width={170}height={138}/>
              <Image src={"/images/gamepadW2.svg"} alt="game"width={170}height={138}/>
              <Image src={"/images/gamepadW3.svg"} alt="game"width={170}height={138}/>
              <Image src={"/images/gamepadW4.svg"} alt="game"width={170}height={138}/>  
            </div>
            {/* 2nd */}
            <div className='w-[500px] h-[600px] mobile:w-[300px] mobile:h-[400px]'>
            <Image src={"/images/biggamepad.svg"} alt="game"width={500}height={600}/>

            </div>
            {/* 3rd */}
            <div className='flex flex-col gap-[24px] w-[399px] h-[600px] ml-[50px] mobile:ml-[-50px]'>
              <h1 className='text-[24px] font-semibold'>Havic HV G-92 Gamepad</h1>

              <div className='flex gap-[16px]'><h1><Image src={"/images/Four Star.svg"} alt="star"width={100}height={20}/></h1><h2>(150 Reviews)</h2><h3 className='h-[16px] mt-[5px] border-[1px] border-[#000000]'></h3><h4 className='text-[#00FF66]'>In Stock</h4></div>
              <h3>$192.00</h3>
              <h4 className='text-[14px]'>PlayStation 5 Controller Skin High quality vinyl with <br/>air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</h4>
              <h5 className='w-[400px] border-[1px] border-[#000000]'></h5>
              <h6><Image src={"/images/colours.svg"} alt="star"width={155}height={20}/></h6>
              <h6><Image src={"/images/size.svg"} alt="star"width={296}height={32}/></h6>
              <h5><Image src={"/images/deliverybox.svg"} alt="star"width={399}height={180}/></h5>
              
            </div>


        </div>
      

      {/* 3rd */}
      <div className='flex gap-[12px] mt-[100px] text-[#DB4444]'><Image src={"/images/Rectangle 18.svg"} alt="star"width={20}height={40}/>Related Item
        </div>

        <div className='flex gap-[30px] mt-[50px] mb-[100px] mobile:flex-col'>
          {/* 1st col */}
                <div className="flex flex-col gap-[8px]">
                  {/* image div */}
                  <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/jeep.svg')] bg-no-repeat bg-center">
                  <div className="flex justify-between mt-[12px] ml-[12px] mr-[12px]"><h1 className="w-[55px] h-[26px] bg-[#DB4444] text-[#FFFFFF]">-40%</h1>
                    <div className="flex flex-col"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
                  </div></div> 
                  {/* text div */}
          
                  <h1 className="font-semibold">HAVIT HV-G92 Gamepad</h1>
                  <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$120</h1><h2>$160</h2></div>
                  <div className="flex gap-[8px]"><Image src={"/images/Five star.svg"}alt="star"width={100}height={20}/>(88)</div>
          </div>
                {/* 1st col end */}

                {/* 2nd col */}
                       <div className="flex flex-col gap-[8px]">
                        {/* image div */}
                        <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/Keyboard.svg')] bg-no-repeat bg-center">
                        <div className="flex justify-between mt-[12px] ml-[12px] mr-[12px]"><h1 className="w-[55px] h-[26px] bg-[#DB4444] text-[#FFFFFF]">-35%</h1>
                          <div className="flex flex-col"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
                        </div><div className="mt-[129px] bg-black w-[270px] h-[41px] text-[#FFFFFF] text-center">Add to cart</div></div> 
                        {/* text div */}
                        <h1 className="font-semibold">AK-900 Wired Keyboard</h1>
                        <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$960</h1><h2>$1160</h2></div>
                        <div className="flex gap-[8px]"><Image src={"/images/Four Star.svg"}alt="star"width={100}height={20}/>(75)</div>
                </div>
                      {/* 2nd col end */}

                      {/* 3rd col */}
                             <div className="flex flex-col gap-[8px]">
                              {/* image div */}
                              <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/gamingMonitor.svg')] bg-no-repeat bg-center">
                              <div className="flex justify-between mt-[12px] ml-[12px] mr-[12px]"><h1 className="w-[55px] h-[26px] bg-[#DB4444] text-[#FFFFFF]">-30%</h1>
                                <div className="flex flex-col"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
                              </div></div> 
                              {/* text div */}
                      
                              <h1 className="font-semibold">IPS LCD Gaming Monitor</h1>
                              <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$370</h1><h2>$400</h2></div>
                              <div className="flex gap-[8px]"><Image src={"/images/Five star.svg"}alt="star"width={100}height={20}/>(99)</div>
                      </div>
                            {/* 3rd col end */}

                            {/* 4th col */}
                                  <div className="flex flex-col  gap-[8px]">
                                    {/* image div */}
                                    <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/Vcr.svg')] bg-no-repeat bg-center">
                                      <div className="flex flex-col mt-[12px] ml-[224px] "><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
                                    </div>
                                    {/* text div */}
                                    <h1 className="font-semibold">RGB liquid CPU Cooler</h1>
                                    <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$160</h1><h2>$170</h2></div>
                                    <div className="flex gap-[8px]"><Image src={"/images/Four Star.svg"}alt="star"width={100}height={20}/>(65)</div>
                                  </div>
                                  
                                  {/* 4th col end */}
                
                

        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default page

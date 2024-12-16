import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Home = () => {
  return (
    <div>
    
      {/* 1st section */}
      <div className="flex mobile:flex-col">
        {/* 1st */}
        <div className="flex flex-col w-[217px] h-[344px] mt-[45px] ml-[135px] gap-[16px] mobile:ml-[35px]">
          <h1 className="flex gap-[51px] font-[Poppins]">
            {`Women's Fashion`}
            <Image
              src={"/images/leftarrow.svg"}
              alt="arrow"
              width={24}
              height={24}
            /></h1>
           <h1 className="flex gap-[73px] font-[Poppins]">
            {`Men's Fashion`}
            <Image
              src={"/images/leftarrow.svg"}
              alt="arrow"
              width={24}
              height={24}
            /></h1>
          <h1 className="font-[Poppins] texr-[16px]">Electronics</h1>
          <h1 className="font-[Poppins] texr-[16px]">Home & Lifestyle</h1>
          <h1 className="font-[Poppins] texr-[16px]">Medicine</h1>
          <h1 className="font-[Poppins] texr-[16px]">Sports & Outdoors</h1>
          <h1 className="font-[Poppins] texr-[16px]">{`Baby's & Toys`}</h1>
          <h1 className="font-[Poppins] texr-[16px]">Groceries and Pets</h1>
          <h1 className="font-[Poppins] texr-[16px]">health & Beauty</h1>
        </div>
        {/* 1st end */}

        {/* line */}
        <div className="border-l-[0.5px] border-l-[#000000] mobile:border-t-[0.5px] border-t-[#000000]"></div>
        {/* line end */}

        {/* next */}
        <div className="flex mt-[45px] ml-[54px] bg-[#000000] text-[#FAFAFA] mobile:flex-col mobile:ml-[4px]">
          {/* textdi */}
          <div className="flex flex-col">

            <div className="flex w-[190px] h-[49px] gap-[24px] mt-[58px] mb-[12px] ml-[64px]"><Image src={"/images/apple.svg"}alt="apple"width={40}height={49}/><h1 className="flex justify-center items-center">iPhone 14 Series</h1></div>

            <div className="text-[48px] font-[inter] ml-[64px]">Up to 10% <br/> off Voucher</div>

            <div className="flex ml-[64px]">
            <Button variant={'apnaStyle'} className="underline">ShopNow<Image src={"/images/leftarrow.svg"}alt="arrow"width={24}height={24}/></Button></div>
          </div>
          {/* image div */}
          <div className="mt-[16px]"><Image src={"/images/mobile.svg"}alt="mobile"width={496}height={24}/>
          <div><Image src={"/images/dots.svg"}alt="dots"width={110}height={14}/></div></div>

</div>
</div>
      {/* next end */}
     




{/* 2nd section */}
      <div className="mt-[100px] ml-[135px] gap-[40px] mobile:ml-[4px]">
        {/* text div */}
        <div className="flex gap-[470px] mobile:flex-col mobile:gap-[12px]">
    {/* 1st */}
          <div className="flex flex-col">
           <div className="flex text-[#DB4444] gap-[16px] text-[16px] font-[Poppins]"><Image src={"/images/Rectangle 18.svg"}alt="Rectangle"width={20}height={40}/>{`Today's`}</div>
           <div className="flex justify-evenly">
            <div className="text-[36px] font-medium mt-3">Flash Sales</div>
            
            <div className="flex ml-11 mobile:ml-1 mobile:mt-12">
            <div className="flex ml-[16px] mb-[16px]"><div className="gap-[4px]"><h1 className="text-[12px] font-semibold">Days</h1><p className="text-[32px] font-bold">03</p></div><div className="mt-[26px] ml-[16px] text-[#DB4444]">:</div></div>

            <div className="flex ml-[16px] mb-[16px]"><div className="gap-[4px]"><h1 className="text-[12px] font-semibold">Hours</h1><p className="text-[32px] font-bold">23</p></div><div className="mt-[26px] ml-[16px] text-[#DB4444]">:</div></div>
            <div className="flex ml-[16px] mb-[16px]"><div className="gap-[4px]"><h1 className="text-[12px] font-semibold">Minutes</h1><p className="text-[32px] font-bold">19</p></div><div className="mt-[26px] ml-[16px] text-[#DB4444]">:</div></div>
            <div className="flex ml-[16px] mb-[16px]"><div className="gap-[4px]"><h1 className="text-[12px] font-semibold">Seconds</h1><p className="text-[32px] font-bold">56</p></div></div>
           
           </div>
           </div>
           </div>
           {/* 2nd */}
          <div className="mt-14"><Image src={"/images/twoarrow.svg"}alt="Rectangle"width={100}height={46}/></div>
          </div>


          {/* col div */}
          <div className="grid grid-cols-5 gap-[150px] mobile:grid-cols-1 mobile:gap-[8px] mobile:ml-[50px] mobile:mt-[50px]">
              {/* 1st col */}
      <div className="flex flex-col gap-[8px]">
        {/* image div */}
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/jeep.svg')] bg-no-repeat bg-center">
        <div className="flex justify-between mt-[12px] ml-[12px] mr-[12px]"><h1 className="w-[55px] h-[26px] bg-[#DB4444] text-[#FFFFFF]">-45%</h1>
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
      <div className="flex flex-col gap-[8px]">
        {/* image div */}
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/comfortChair.svg')] bg-no-repeat bg-center">
        <div className="flex justify-between mt-[12px] ml-[12px] mr-[12px]"><h1 className="w-[55px] h-[26px] bg-[#DB4444] text-[#FFFFFF]">-25%</h1>
          <div className="flex flex-col"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
        </div></div> 
        {/* text div */}

        <h1 className="font-semibold">S-Series Comfort Chair</h1>
        <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$375</h1><h2>$400</h2></div>
        <div className="flex gap-[8px]"><Image src={"/images/Four Half Star.svg"}alt="star"width={100}height={20}/>(99)</div>
</div>
      {/* 4th col end */}

      {/* 5th col */}
      <div className="flex flex-col gap-[8px]">
        {/* image div */}
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/comfortChair.svg')] bg-no-repeat bg-center">
        <div className="flex justify-between mt-[12px] ml-[12px] mr-[12px]"><h1 className="w-[55px] h-[26px] bg-[#DB4444] text-[#FFFFFF]">-25%</h1>
          <div className="flex flex-col"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
        </div></div> 
        {/* text div */}

        <h1 className="font-semibold">S-Series Comfort Chair</h1>
        <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$375</h1><h2>$400</h2></div>
        <div className="flex gap-[8px]"><Image src={"/images/Four Half Star.svg"}alt="star"width={100}height={20}/>(99)</div>
</div>
      {/* 5th col end */}
</div>
{/* col div end */}

<Button variant={"apnaStyle"} className="flex justify-center items-center bg-[#DB4444] text-[#FFFFFF] w-[234px] h-[56px] ml-[500px] mt-[50px] mobile:ml-[50px]">View All Products</Button>

<div className="border-[1px] border-[#c1c1c1] w-[1170px] mt-[50px] "></div>
          
          
    </div>    
 {/* 2nd sec end */}
 
        
      
        


        
        



      
       
      






{/* 3rd dsection */}
<div className="flex flex-col mt-[100px] ml-[135px] gap-[16px]  mobile:ml-10">
  {/* text div */}
  <div className="flex flex-col">

    <div className="flex gap-[16px] text-[#DB4444]"><Image src={"/images/Rectangle 18.svg"}alt="Rectangle"width={20}height={40}/>Categories</div>

    <div className="flex justify-between mt-12 w-[1170px] mobile:flex-col">
      <div className="text-[36px] font-semibold">Browse By Category</div>
      <div><Image src={"/images/twoarrow.svg"}alt="Rectangle"width={100}height={46}/></div>
    </div>
  
  
  </div>
  {/* col div */}
  <div className="grid grid-cols-6 w-[1170px] gap-[30px] mobile:grid-cols-1 mobile:ml-12">
    {/* 1st */}
    <div className="w-[170px] r-[4px] border-[1px] border-[#000000]">
      <div className="flex flex-col mt-[25px] ml-[57px] gap-[16px]"><Image src={"/images/cellPhone.svg"}alt="phone"width={56}height={56}/>Phones</div>
    </div>
   {/* 2nd div */}
   <div className="w-[170px] r-[4px] border-[1px] border-[#000000]">
   <div className="flex flex-col mt-[25px] ml-[57px] gap-[16px]"><Image src={"/images/Computer.svg"}alt="computer"width={56}height={56}/>Computer</div>
   </div>
   {/* 3rd div */}
   <div className="w-[170px] r-[4px] border-[1px] border-[#000000]">
   <div className="flex flex-col mt-[25px] ml-[57px] gap-[16px]"><Image src={"/images/SmartWatch.svg"}alt="watch"width={56}height={56}/>SmartWatch</div>
   </div>
   {/* 4 div */}
   <div className="w-[170px] r-[4px] border-[1px] border-[#000000] bg-[#DB4444]">
   <div className="flex flex-col mt-[25px] ml-[57px] gap-[16px]"><Image src={"/images/Camera.svg"}alt="camera"width={56}height={56}/>Camera</div>
   </div>
   {/* 5 div */}
   <div className="w-[170px] r-[4px] border-[1px] border-[#000000]">
   <div className="flex flex-col mt-[25px] ml-[57px] gap-[16px]"><Image src={"/images/Headphone.svg"}alt="Headphone"width={56}height={56}/>HeadPhones</div>
   </div>
   {/* 6 div */}
   <div className="w-[170px] r-[4px] border-[1px] border-[#000000]">
   <div className="flex flex-col mt-[25px] ml-[57px] gap-[16px]"><Image src={"/images/Gamepad.svg"}alt="Game"width={56}height={56}/>Gaming</div>

   </div>
  
   </div>
   </div>
   


   {/* section 4 */}
   <div className="flex flex-col w-[1170px] ml-[135px] gap-[60px] mt-[100px] mobile:ml-10">
{/* 1st */}
    <div className="flex flex-col gap-[54px]">
      <div className="flex text-[#DB4444]"><Image src={"/images/Rectangle 18.svg"}alt="Rectangle"width={20}height={40}/>This month</div>
      <div className="flex justify-between"><h1>Best Selling Products</h1><Button variant={'apnaStyle'} className="bg-[#DB4444]">View All</Button></div>


    </div>
    
 {/*2nd  */}
    <div className="grid grid-cols-4 gap-[30px] mobile:grid-cols-1 mobile:ml-">
      {/* 1st col */}
      <div className="flex flex-col w-[270px] h-[350px] gap-[16px]">
        {/* image div */}
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/shirt.svg')] bg-no-repeat bg-center">
          <div className="flex flex-col mt-[12px] ml-[224px] "><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
        </div>
        {/* text div */}
        <h1 className="font-semibold">The north coat</h1>
        <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$260</h1><h2>$360</h2></div>
        <div className="flex gap-[8px]"><Image src={"/images/Five star.svg"}alt="star"width={100}height={20}/>(65)</div>

        

      </div>
      {/* 1st col end */}
      {/* 2nd col */}
      <div className="flex flex-col w-[270px] h-[350px] gap-[16px]">
        {/* image div */}
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/purs.svg')] bg-no-repeat bg-center">
          <div className="flex flex-col mt-[12px] ml-[224px] "><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
        </div>
        {/* text div */}
        <h1 className="font-semibold">Gucci duffle bag</h1>
        <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$960</h1><h2>$1160</h2></div>
        <div className="flex gap-[8px]"><Image src={"/images/Four Star.svg"}alt="star"width={100}height={20}/>(65)</div>
      </div>
      {/* 2nd col end */}
      {/* 3rd col */}
      <div className="flex flex-col w-[270px] h-[350px] gap-[16px]">
        {/* image div */}
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/Vcr.svg')] bg-no-repeat bg-center">
          <div className="flex flex-col mt-[12px] ml-[224px] "><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
        </div>
        {/* text div */}
        <h1 className="font-semibold">RGB liquid CPU Cooler</h1>
        <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$160</h1><h2>$170</h2></div>
        <div className="flex gap-[8px]"><Image src={"/images/Four Star.svg"}alt="star"width={100}height={20}/>(65)</div>
      </div>
      
      {/* 3rd col end */}
      {/* 4th col */}
      <div className="flex flex-col w-[270px] h-[350px] gap-[16px]">
        {/* image div */}
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] bg-[url('/images/Chair.svg')] bg-no-repeat bg-center">
          <div className="flex flex-col mt-[12px] ml-[224px] "><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
        </div>
        {/* text div */}
        <h1 className="font-semibold">Small BookSelf</h1>
        <div className="flex gap-[8px]"><h1 className="text-[#DB4444]">$360</h1></div>
        <div className="flex gap-[8px]"><Image src={"/images/Four Star.svg"}alt="star"width={100}height={20}/>(65)</div>
      </div>
      
      {/* 4th col end */}
    </div>
  </div>


  {/* section 5 */}
  <div className="flex w-[1170px] ml-[135px] bg-[#000000] mt-[100px] mobile:flex-col mobile:ml-[0px] pb-[30px]">
    {/* text div */}
    <div className="flex flex-col text-[#FAFAFA] gap-[40px] mt-[69px] ml-[56px] mobile:ml-[2px]">
      <h1 className="text-[#00FF66]">Categories</h1>
      <h2 className="text-[48px] font-semibold">Enhance Your <br/>Music Experience</h2>
      <h3 className="flex gap-[24px]"><Image src={"/images/selltimer1.svg"}alt="timer"width={62}height={62}/><Image src={"/images/selltimer2.svg"}alt="timer"width={62}height={62}/><Image src={"/images/selltimer3.svg"}alt="timer"width={62}height={62}/><Image src={"/images/selltimer4.svg"}alt="timer"width={62}height={62}/></h3>
      <h4><Button variant={'apnaStyle'} className="bg-[#00FF66] w-[171px] h-[56px]">Buy Now</Button></h4>
    </div>
    {/* Image div */}
    <div className="ml-[45px] mt-[45px] mobile:ml-[0px] mobile:w-[400px]"><Image src={"/images/main record.svg"}alt="timer"width={600}height={420}/></div>
  </div>


  {/* section 6 */}
  <div className="flex flex-col ml-[135px] mt-[100px] mobile:ml-[2px]">
    {/* text div */}
    <div className="flex flex-col gap-[32px]">
      <div className="flex gap-[16px] text-[#DB4444]"><Image src={"/images/Rectangle 18.svg"}alt="rectangle"width={20}height={40}/>Our Product</div>
      <div className=" w-[1170px] flex justify-between text-[36px] font-semibold mobile:flex-col">Explore Our Products<Image src={"/images/twoarrow.svg"}alt="twoarrow"width={100}height={46}/></div>
    </div>
    {/* col div 1 */}
    <div className="grid grid-cols-4 w-[1170px] mobile:grid-cols-1 mobile:ml-[50px]">
      {/*1st*/}
      <div className="flex flex-col w-[270px] h-[322px]">
        {/* img div */}
        <div className="flex h-[250px] bg-[#F5F5F5]">
        <div className="mt-[36px] ml-[55px]"><Image src={"/images/bear.svg"}alt=""width={146}height={163}/></div>
        <div className="mt-[12px] ml-[60px]"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
          
        </div>
        {/* text div */}
        <div>
          <h1 className="font-semibold">Breed Dry Dog Food</h1>
          <h2 className="flex gap-[8px]">
            <div className="text-[#DB4444]">$100</div>
            <div><Image src={"/images/Three Star.svg"}alt="eye"width={100}height={20}/></div>
            <div>(35)</div>
          </h2>
        </div>



      </div>
      {/* 2nd */}
      <div className="flex flex-col w-[270px] h-[322px]">
        {/* img div */}
        <div className="flex-col h-[250px] bg-[#F5F5F5]">
        <div className="flex"><div className="mt-[36px] ml-[55px]"><Image src={"/images/pic-camera.svg"}alt="twoarrow"width={146}height={163}/></div>
        <div className="mt-[12px] ml-[60px]"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div></div>
        <div className="w-[270px] h-[41px] bg-black mt-[32px] text-[#FAFAFA] text-center">Add To Cart</div>
        
          
        </div>
        {/* text div */}
        <div>
          <h1 className="font-semibold">CANON EOS DSLR Camera</h1>
          <h2 className="flex gap-[8px]">
            <div className="text-[#DB4444]">$360</div>
            <div><Image src={"/images/Four Star.svg"}alt="sta"width={100}height={20}/></div>
            <div>(95)</div>
          </h2>
        </div>
</div>
{/*3rd*/}
<div className="flex flex-col w-[270px] h-[322px]">
        {/* img div */}
        <div className="flex h-[250px] bg-[#F5F5F5]">
        <div className="mt-[36px] ml-[55px]"><Image src={"/images/laptop.svg"}alt=""width={172}height={180}/></div>
        <div className="mt-[12px] ml-[60px]"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
          
        </div>
        {/* text div */}
        <div>
          <h1 className="font-semibold">ASUS FHD Gaming Laptop</h1>
          <h2 className="flex gap-[8px]">
            <div className="text-[#DB4444]">$700</div>
            <div><Image src={"/images/Three Star.svg"}alt="eye"width={100}height={20}/></div>
            <div>(325)</div>
          </h2>
        </div>




      </div>
      {/*4th*/}
<div className="flex flex-col w-[270px] h-[322px]">
        {/* img div */}
        <div className="flex h-[250px] bg-[#F5F5F5]">
        <div className="mt-[36px] ml-[55px]"><Image src={"/images/curology.svg"}alt=""width={172}height={159}/></div>
        <div className="mt-[12px] ml-[60px]"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
          
        </div>
        {/* text div */}
        <div>
          <h1 className="font-semibold">Cuology Product Set</h1>
          <h2 className="flex gap-[8px]">
            <div className="text-[#DB4444]">$500</div>
            <div><Image src={"/images/Four Star.svg"}alt="star"width={100}height={20}/></div>
            <div>(145)</div>
          </h2>
        </div>
        



      </div>


    
    </div>

    {/* col div 2*/}
    <div className="grid grid-cols-4 w-[1170px] mobile:grid-cols-1 mobile:ml-[50px]">
      {/*1st*/}
      <div className="flex flex-col w-[270px] h-[322px]">
        {/* img div */}
        <div className="flex h-[250px] bg-[#F5F5F5]">
        <div className="mt-[36px] ml-[55px]"><Image src={"/images/redcar.svg"}alt=""width={146}height={163}/></div>
        <div className="mt-[12px] ml-[60px]"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
          
        </div>
        {/* text div */}
        <div>
          <h1 className="font-semibold">Kids Electric Car</h1>
          <h2 className="flex gap-[8px]">
            <div className="text-[#DB4444]">$900</div>
            <div><Image src={"/images/Five Star.svg"}alt="eye"width={100}height={20}/></div>
            <div>(65)</div>
          </h2>
          <h3><Image src={"/images/colorButton.svg"}alt="button"width={48}height={20}/></h3>
        </div>



      </div>
      {/* 2nd */}
      <div className="flex flex-col w-[270px] h-[322px]">
        {/* img div */}
        <div className="flex h-[250px] bg-[#F5F5F5]">
        <div className="mt-[36px] ml-[55px]"><Image src={"/images/shoes.svg"}alt="shoes"width={186}height={164}/></div>
        <div className="mt-[12px] ml-[60px]"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
          
        </div>
        {/* text div */}
        <div>
          <h1 className="font-semibold">{`Jr. Zoom Soccer Cleats`}</h1>
          <h2 className="flex gap-[8px]">
            <div className="text-[#DB4444]">$1160</div>
            <div><Image src={"/images/Five star.svg"}alt="sta"width={100}height={20}/></div>
            <div>(35)</div>
          </h2>
          <h3><Image src={"/images/colorButton2.svg"}alt="sta"width={48}height={20}/></h3>
        </div>
</div>
{/*3rd*/}
 <div className="flex flex-col w-[270px] h-[322px]">
        {/* img div */}
        <Link href="./productdetailpage"><div className="flex h-[250px] bg-[#F5F5F5] hover:bg-[#DB4444]">
          
        <div className="mt-[36px] ml-[55px]"><Image src={"/images/shooter game.svg"}alt="game"width={178}height={150}/></div>
        <div className="mt-[12px] ml-[60px]"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
          
        </div></Link>
        {/* text div */}
        <div>
          <h1 className="font-semibold">GP11 Shooter USB Gamepad</h1>
          <h2 className="flex gap-[8px]">
            <div className="text-[#DB4444]">$700</div>
            <div><Image src={"/images/Four Half Star.svg"}alt="eye"width={100}height={20}/></div>
            <div>(325)</div>
          </h2>
          <h3><Image src={"/images/colorButton3.svg"}alt="eye"width={48}height={20}/></h3>
        </div>




      </div>
      {/*4th*/}
<div className="flex flex-col w-[270px] h-[322px]">
        {/* img div */}
        <div className="flex h-[250px] bg-[#F5F5F5]">
        <div className="mt-[36px] ml-[55px]"><Image src={"/images/jacket.svg"}alt="jacket"width={182}height={176}/></div>
        <div className="mt-[12px] ml-[60px]"><Image src={"/images/Wishlist.svg"}alt="wishlist"width={34}height={34}/><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></div>
          
        </div>
        {/* text div */}
        <div>
          <h1 className="font-semibold">Quilted Satin Jacket</h1>
          <h2 className="flex gap-[8px]">
            <div className="text-[#DB4444]">$660</div>
            <div><Image src={"/images/Four Half Star.svg"}alt="star"width={100}height={20}/></div>
            <div>(55)</div>
          </h2>
          <h3><Image src={"/images/colorButton3.svg"}alt="star"width={48}height={20}/></h3>
        </div>
        </div>
</div>
{/* button div */}
    <div><Button variant={'apnaStyle'} className="w-[234px] h-[56px] bg-[#DB4444] ml-[500px] mt-[32px] mobile:ml-[50px]">View All Products</Button></div>
    </div>


    {/* section 7 */}
    <div className="w-[1170px] mt-[100px] ml-[135px] gap-[60px] mobile:ml-[2px]">
      {/* text div */}
      <div className="flex text-[#DB4444] gap-[16px]"><Image src={"/images/Rectangle 18.svg"}alt="Rectangle"width={20}height={40}/>Featured</div>
      <div className="text-[36px] font-semibold">New Arrival</div>
      {/* col div */}
      <div className="flex gap-[32px] mobile:flex-col">
        <div className="w-[570px] h-[600px] bg-[#000000] bg-[url('/images/slim.svg')] bg-no-repeat mobile:w-[350px]"><div className="flex flex-col mt-[446px] ml-[32px] text-[#FAFAFA]"><h1 className="text-[24px] font-semibold">PlayStation 5</h1><h2>Black and White version of the PS5 <br/> {`coming out on sale.`}</h2><Button variant={'apnaStyle'} className="underline w-[81px]">ShopNow</Button></div>

        </div>

        <div className="flex flex-col gap-[30px]">
          <div className="w-[570px] h-[284px] bg-[#000000] bg-[url('/images/hatWomen.svg')] bg-no-repeat bg-cover text-[#FAFAFA] mobile:w-[350px]"><div className="flex flex-col mt-[138px] ml-[24px]"><h1 className="text-[24px] font-semibold ">{`Women's Collection`}</h1><h2>Featured woman collections that give you another vibe.</h2><Button variant={'apnaStyle'} className="underline w-[81px]">ShopNow</Button></div></div>

          <div className="flex gap-[30px] mobile:flex-col mobile:ml-[50px]">
            <div className="w-[270px] h-[284px] bg-[#000000] bg-[url('/images/Speakers.svg')] bg-no-repeat bg-cover"><div className="flex flex-col text-[#FAFAFA] ml-[24px] mt-[175px]"><h1 className="text-[24px] font-semibold">Speakers</h1><h2 className="text-[14px]">Amazon wireless speakers</h2><Button variant={'apnaStyle'} className="underline w-[81px]">ShopNow</Button></div>
            </div>
          <div className="w-[270px] h-[284px] bg-[#000000] bg-[url('/images/perfume.svg')] bg-no-repeat bg-cover"><div className="flex flex-col mt-[175px] ml-[24px] text-[#FAFAFA]"><h1 className="text-[24px] font-semibold">Perfume</h1><h2>UCCI INTENSE OUD EDP</h2><Button variant={'apnaStyle'} className="underline w-[81px]">ShopNow</Button></div></div></div>
        </div>
  </div>
        </div>


        {/* section8 */}
        <div className="flex w-[943px] mt-[100px] ml-[249px] gap-[88px] mb-[100px] mobile:flex-col mobile:ml-[50px]">
          <div className="flex flex-col gap-[24px]"><h1><Image src={"/images/Services1.svg"}alt="service"width={80}height={80}/></h1><h2>FREE AND FAST DELIVERY</h2><h3>Free delivery for all orders over $140</h3></div>

          <div className="flex flex-col gap-[24px]"><h1><Image src={"/images/Services2.svg"}alt="service"width={80}height={80}/></h1><h2>24/7 CUSTOMER SERVICE</h2><h3>Friendly 24/7 customer support</h3></div>

          <div className="flex flex-col gap-[24px]"><h1><Image src={"/images/Services3.svg"}alt="service"width={80}height={80}/></h1><h2>MONEY BACK GUARANTEE</h2><h3>We reurn money within 30 days</h3></div>

          
          
        



  </div>
  </div>
  );
};

export default Home;
   
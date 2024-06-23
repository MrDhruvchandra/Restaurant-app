import React, { useEffect } from "react"
import imgage from"../assets/plate.png"
export function Item(){

      const items= [{
        dish:"Italian Style Chicken Meatballs",
        discpn:"It's italian dish it is very popular in italy",
        prize:"$8.75",
        img:{imgage}
                },
        {
            dish:"Italian Style Chicken Meatballs 2",
            discpn:"It's italian dish it is very popular in italy",
            prize:"$8.75",
            img:{imgage}},
            {
                dish:"Italian Style Chicken Meatballs 3",
                discpn:"It's italian dish it is very popular in italy",
                prize:"$8.75",
                img:{imgage}},
                {
                    dish:"Italian Style Chicken Meatballs 4",
                    discpn:"It's italian dish it is very popular in italy",
                    prize:"$8.75",
                    img:{imgage}},
                    {
                        dish:"Italian Style Chicken Meatballs 5",
                        discpn:"It's italian dish it is very popular in italy",
                        prize:"$8.75",
                        img:{imgage}},
                        {
                            dish:"Italian Style Chicken Meatballs 6",
                            discpn:"It's italian dish it is very popular in italy",
                            prize:"$8.75",
                            img:{imgage}}
    ]
    function Dish( items){
        return(

          

               <div className="grid grid-cols-1 sm:grid-cols-5  gap-12 md:gap-5 py-7 px-3 mb-6 ">
              <div className="h-[122px] col-span-1 ">
                  <img
                    src={imgage}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className=" mx-2 my-2 col-span-4 gap-7 pl-5">
               <div className="  mx-7 my-4">
                     
                    <div className="flex justify-between ">
                         <h2 className="px-2 py-2 text-black  text-2xl">{items.dish}</h2>
                         <h3 className="px-3 py-3 pr-0 text-2xl text  ">{items.prize}</h3>
                       
                     </div>
               </div>
                
                <div className=" flex justify-between mx-7 my-4">
                <p className="px-2 py-2">{items.discpn}</p>
                     <button className="flex justify-between gap-2 px-2 py-3 pl-10 ">SHOP NOW
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                     </button>
                </div>
               
                
            </div>
            </div>
              
        )
    }
    return(  
        <div className=" grid grid-cols-1 sm:grid-cols-2 ">
            {/* <img src={imgage} alt="" className=" w-9 h-9" /> */}
              {items.map((item, index) => (
        <Dish key={index} img= {item.img} dish={item.dish} discpn={item.discpn} prize={item.prize} />
      ))}


        </div>
    )
}
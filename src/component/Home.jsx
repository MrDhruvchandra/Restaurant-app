import leaf from "../assets/leaf.png"
import fruits from "../assets/fruits.jpg"
import { Navbar1 } from "./Navbar1"
import { Navbar2 } from "./Navbar2"
import img from"../assets/plate.png"
import sglleaf from "../assets/sglleaf.png"
export function Home(){
    return(
        <div className="container pb-8 sm:pb-0" >
            {/* landing page */}
             <div className=" static grid sm:gap-0 sm:grid-cols-2 min-h-[550px] sm:min-h-[600px] ">


                {/* home part one */}
                <div className=" gap-10 sm:col-span-1  bg-gray-200">
                    {/* navebar1 */}
                    <div> <Navbar1/></div>
                    {/* body */}
                    <div className="ml-12 my-40  ">
                        <div className="text-xl my-3"> 
                            <p>Discount up to 20%</p>
                        </div>
                        <div className="my-3 text-5xl mr-[100px]  ">
                        {/* <img src={sglleaf} alt="" className=" brightness-110  rounded-xl absolute top-10 left-10 ml-[70px] mt-[-80px] w-[30px] h-[40px] sm:w-[450px]"/> */}
                            <h2 className="p-0">Buy Fresh And Organic Grocery Food <img src={fruits} alt="" className=" rounded-xl h-8 w-32 "/></h2>
                            
                        </div>

                        <div className="  text-sm mr-[100px] ">
                            <p>Lorem ipsum,akjwjfnkjkn kjeanfjkaqnf kjfnkjankjf kjaenfkjnaku jhefbhqeyjfb hjewbfweuihfu hjwebjuwehhgju hjwerjurwhgf hjwebfjewhyjb  dolor sit amet consectetur adipisicing elit. Nam  </p>
                        </div>
                        <div className=" my-3 flex justify-between mr-[100px]">
                            <button className="flex justify-normal  text-xl w-50 h-12 bg-green-900 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full "> SHOP NOW 
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>

                            </button>
                            <div className="flex space-x-8  mr-[100px]">
                                <div>
                                    <h3 className="text-2xl">35k+</h3>
                                    <p className=" text-sm">Users</p>
                                </div>
                                <div>
                                <h3 className="text-2xl">18k+</h3>
                                <p className=" text-sm">Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  

               
                 {/* home part two*/}
                <div className="   sm:col-span-1 bg-green-900"  >
                    {/* navbar2  */}
                    <div> <Navbar2/></div>
                    {/* img */}
                    
                    <div className="  min-h-[450px] flex   items-center relative order-1 sm:order-2">
                    <img src={img} alt="" className="w-[300px] sm:w-[450px] sm:scale-125 ml-[-103px] "/>
                <img src= {leaf} alt=""className=" brightness-110  rounded-xl absolute bottom-10 right-10 mr-[70px] mb-[-80px] w-[300px] sm:w-[450px]"/>
                    </div>
                    
                </div>





        
             </div>
              
        </div>
    )
}
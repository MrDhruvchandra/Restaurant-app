import {Btn} from "./Btn.jsx"
import {Item} from "./Item.jsx"

export function Shop(){
    return(
        <div className="min-h-[550px] ">
            
                <div className="py-5">
                    <h4 className=" sm:text-lg flex justify-center py-3">Shop By Category</h4>
                    <h1 className=" sm:text-3xl flex justify-center py-3" >  Top Category Of Organic Food  </h1>

                </div>
                <Btn/>
                <Item/>

        </div>
    )
}
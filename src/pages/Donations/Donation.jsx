import { useEffect, useState } from "react";

import DonationCard from "./DonationCard";




const Donation = () => {

    const [donation, setDonation] = useState([])
    const [noFound, setNoFound ] = useState(false);

    const [isShow, setIsShow] = useState(false);

    

    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donated'));
        if(donateItem) {
            setDonation(donateItem)
        }
        else{
            setNoFound('404 error  no data found')
        }
    },[]);
    console.log(donation);

    console.log(isShow);

    return <div>{noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
     : 
    <div>
        <div className="grid grid-cols-2 gap-5">
            { 

            isShow ? donation.map((donate)=> ( <DonationCard key={donate.id} donate={donate}></DonationCard>)) :
            donation.slice(0,4).map((donate)=> ( <DonationCard key={donate.id} donate={donate}></DonationCard>))
            }
        </div>
 <br></br>
        <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-red-500 block mx-auto rounded text-white py-2">
           {isShow ? "See Less" : "See More"} 
        </button>
        


   </div>}</div>
    
};

export default Donation;
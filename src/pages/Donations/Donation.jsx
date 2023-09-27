import { useEffect, useState } from "react";
import DonationedCard from "../Donationed/DonationedCard";




const Donation = () => {

    const [donation, setDonation] = useState([])
    const [noFound, setNoFound ] = useState(false);

    

    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donation'));
        if(donateItem) {
            setDonation(donateItem)
        }
        else{
            setNoFound('404 error  no data found')
        }
    },[]);
    console.log(donation);

    return <div>{noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
     : 
    <div>
        <div className="grid grid-cols-2 gap-5">
            {donation.map(donate=> <DonationedCard key={donate.id} donate={donate}></DonationedCard>)}
        </div>
        


   </div>}</div>
    
};

export default Donation;
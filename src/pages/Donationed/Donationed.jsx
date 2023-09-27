import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationedCard from "./DonationedCard";


const Donationed = () => {

 const [donate,setDonate] = useState()


    const {id} = useParams()
    

    const donates = useLoaderData()
    

    useEffect(()=>{
        const findDonate = donates?.find(donate=>donate.id == id)
        
        console.log(findDonate);
        setDonate(findDonate)

    },[id,donates])

    console.log(donate);

    return (
        <div>
            <DonationedCard donate={donate}></DonationedCard>
        </div>
    );
};

export default Donationed;
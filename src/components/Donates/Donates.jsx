import DonateCard from "./DonateCard";


const Donates = ({donates}) => {
    console.log(donates);
    return (
        <div className="py-10" >
           <h1 className="text-2xl text-center"></h1> 
           <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                donates?.map(donate=><DonateCard key={donate.id}donate={donate}></DonateCard>)
            }
           </div>
        </div>
    );
};

export default Donates;
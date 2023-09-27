
import { Link } from "react-router-dom";
const DonateCard = ({donate}) => {

    const {id,picture,title,category,category_bg_color,text_button_bg_color,card_bg_color} = donate || {}


    return (
        <div>
            <Link to={`/donates/${id}`}>
            <div className="">
  <div >
    
  <div style={{background:card_bg_color}} className="relative flex w-[312px]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  ">
  <div  className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={picture}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 style={{background:category_bg_color}}  className="inline-flex rounded block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
      <div style={{color:text_button_bg_color}} >{category} </div>
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased " style={{color:text_button_bg_color}}>
      {title}
    </p>
  </div>
  
</div>
    
  </div>
  
</div>
    </Link>
            
   

        </div>
    );
};

export default DonateCard;
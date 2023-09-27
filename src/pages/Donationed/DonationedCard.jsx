import swal from "sweetalert";


const DonationedCard = ({donate}) => {

    const {id,picture,title,description,price,category_bg_color} = donate || {}

    const handelAddToDonate = ()=>{

        const addedToDonateArray = [];

        const donateItem = JSON.parse(localStorage.getItem('donated'));
        
        if (!donateItem) {
            addedToDonateArray.push(donate);
            localStorage.setItem('donated',JSON.stringify(addedToDonateArray));
            swal("Are you sure you want to donate?", {
                buttons: ["Oh no", "Aww yess!"],
              });
        }
        else{

            const isExists = donateItem.find(donate=> donate.id == id)
            
            if (!isExists){
                addedToDonateArray.push(...donateItem,donate);
            localStorage.setItem('donated',JSON.stringify(addedToDonateArray));
            swal("Are you sure you want to donate?", {
                buttons: ["Oh no", "Aww yess!"],
              });

            }
            else{
                swal("You Have Already donated?", {
                    buttons: [ "Aww yess!"],
                  });
            }

            
        }

    }

   // localStorage.setItem('test',JSON.stringify([{name:'daiyan'}]))

    return (
        <div>
            <div className=" justify-center items-center" >
            <div className="relative grid h-[40rem] w-full max-w-[1320px] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none    bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
   <img className="w-[1320px]" src={picture} alt="" />
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
  
  <div className="p-6 pt-0">
    <button onClick={handelAddToDonate}
      
      className="select-none rounded-lg   py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
      type="button"
      data-ripple-light="true"
      style={{background:category_bg_color}}
    >
      Donate ${price};
      
    </button>
  </div>
    
     </div>
  </div>
  <h2 className="font-bold text-xl">{title}</h2>

  <p>{description}</p>
            
        </div>
        </div>
    );
};

export default DonationedCard;
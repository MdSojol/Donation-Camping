import { useLoaderData, useParams } from "react-router-dom";
import "../App.css"

const ViewDeatilse = () => {
    const donationSingle = useLoaderData();
    // console.log(donationSingle)
    const { id } = useParams();
    const idInt = parseInt(id);
    // console.log(idInt)
    const donation = donationSingle.find(DonationSingles => DonationSingles.id === id);
    console.log(donation);
    const { image_url, topic, description, text_color } = donation;
    return (
        <div>

            <div className="container mx-auto mt-10 ">
                <div className="w-2/4 mx-auto relative">
                    <div>
                        <img className="w-full " src={image_url} alt="" />
                    </div>
                    <div className="custom_background_color absolute w-full  bottom-0  ">
                        <button className="border-none ml-5 mb-5 mt-5 font-bold text-white w-fit py-1 px-2 rounded-md " style={{ backgroundColor: text_color }}>Donate $290</button>
                    </div>


                </div>
                <div className="w-2/4 mx-auto">
                    <h1 className="font-bold text-2xl pb-2 p-4 mt-5">{topic}</h1>
                    <h1 className=" text-sm p-4 pt-0 ">{description}</h1>
                </div>



            </div>


        </div>
    );
};

export default ViewDeatilse;
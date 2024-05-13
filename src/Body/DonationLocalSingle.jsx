import { Link } from "react-router-dom";

const DonationLocalSingle = ({ dataSingle }) => {

    // console.log(dataSingle);
    // const {text_color, image_url, background_color} = dataSingle;
    const { id, image_url, category, text_color, background_color, topic, money } = dataSingle;

    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Movie" /></figure>
                <div className="card-body" style={{ backgroundColor: background_color }}>
                    <h2 className="card-title text-sm w-min py-1 px-2 rounded-sm" style={{ color: text_color, backgroundColor: background_color }}>{category}</h2>
                    <p className='font-bold text-xl' style={{  }}>{topic}</p>
                    
                    <p className="font-bold text-sm" style={{color: text_color}}>{money}</p>
                   <Link to={`/details/${id}`}> <button className="border-none  font-bold text-white w-fit py-1 px-2 rounded-md " style={{ backgroundColor: text_color}}>View Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default DonationLocalSingle;
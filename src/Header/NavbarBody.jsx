import { useEffect, useState } from "react";
import NavbarBodySingleData from "./NavbarBodySingleData";

const NavbarBody = () => {


    const [topics, setTopics] = useState([]);
    useEffect(()=>{
        fetch('Topics.json')
        .then(res => res.json())
        .then(data => setTopics(data))
    },[])


    return (
        <div>
            <div  className="bg-gray-200">
                <div className="pt-24">
                    <h1 className="text-center text-4xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="text-center pb-10 mt-10">
                        <input className="border-none rounded-l-md  px-5 py-2" type="text" placeholder="Search here...." />
                        <button className="bg-[#FF444A] px-5 py-2 rounded-r-md text-white border-none font-bold"> Search</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-4 place-items-center my-5 mt-8 justify-center gap-y-10">
                {
                    topics.map(topicsSingle => <NavbarBodySingleData key={topicsSingle.id} topicsSingle={topicsSingle}></NavbarBodySingleData>)
                }
            </div>

            



            <h1></h1>

        </div>
    );
};

export default NavbarBody;
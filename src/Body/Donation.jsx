import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../LocalStorage/LocalSto";
import DonationLocalSingle from "./DonationLocalSingle";

const Donation = () => {
    const data = useLoaderData();
    const [addingData, setData] = useState([])
    // console.log(data)
    useEffect(() => {
        const storeJobIds = getStoredApplication();

        const jobsApplied = data.filter(datas => storeJobIds?.includes(datas.id));
        // const storeJobIdsIntigers = parseInt(storeJobIds)
        // console.log(jobs, storeJobIds, jobsApplied)
        setData(jobsApplied)
        // console.log(storeJobIds)

    }, [data]);
    // console.log(addingData)
    return (
        <div className="container mx-auto">


            <div className="grid grid-cols-2 gap-10 mt-10 mx-10">
                {
                    addingData.map(dataSingle => <DonationLocalSingle key={dataSingle.id} dataSingle={dataSingle}></DonationLocalSingle>)
                }
            </div>


        </div>
    );
};

export default Donation;
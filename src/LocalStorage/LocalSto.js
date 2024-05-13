const getStoredApplication =() =>{
    const storageJobApplication = localStorage.getItem('donation-camping')
    if(storageJobApplication){
        return JSON.parse(storageJobApplication);
    }
    return[];
}

const saveJobApplication = id =>{
    const storedJobApplications = getStoredApplication();
    const exists = storedJobApplications.find(jobID => jobID === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('donation-camping', JSON.stringify(storedJobApplications))
    }


}

export {getStoredApplication, saveJobApplication}
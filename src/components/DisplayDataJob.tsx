import { useState } from "react";
import { JobData } from "./Types";
import JobForm from "./JobForm";

export default function DisplayDataJob() {
    const [jobList, setJobList] = useState<JobData[]>([]);

    const [editMode, setEditMode] = useState<boolean>(false);

    const handleAddClick = () => {
        setEditMode(true);
    }

    const handleAddJob = (data: JobData) => {
        setJobList([...jobList, data]);
        setEditMode(false);
    };

    const handleDeleteJob = (index: number) => {
        const updatedList = [...jobList];
        updatedList.splice(index, 1);
        setJobList(updatedList);
    };

    return (<section>
        <h2>Berufliche Laufbahn</h2>
        {editMode ? (<>
            {jobList.map((job, index) => (
                <div key={index}>
                    <div data-bs-theme="dark">
                    <button onClick={() => handleDeleteJob(index)}type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <p>{`Firma: ${job.companyName}`}</p>
                    <p>{`Position: ${job.position}`}</p>
                    <p>{`Zeitraum: ${job.startDate} bis ${job.endDate}`}</p>
                </div>
            ))}
             <JobForm handleAddJob={handleAddJob} />
             
            </>
            
        ) : (
            <div>
                {jobList.map((job, index) => (
                <div key={index}>
                    <div data-bs-theme="dark">
                    <button onClick={() => handleDeleteJob(index)}type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <p>{`Firma: ${job.companyName}`}</p>
                    <p>{`Position: ${job.position}`}</p>
                    <p>{`Zeitraum: ${job.startDate} bis ${job.endDate}`}</p>
                </div>
            ))}
                <button type="button" className="btn btn-primary btn-block rounded-pill shadow-sm" onClick={handleAddClick}>Add</button>
            </div>
        )}
    </section>)
}
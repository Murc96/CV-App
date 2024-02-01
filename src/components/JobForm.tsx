import { useState } from "react";
import { JobData } from "./Types";

type JProps = {

    handleAddJob: (data: JobData, e: any) => any
}

export default function JobForm({ handleAddJob }: JProps) {

    const [newJob, setNewJob] = useState<JobData>({
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
    })


    return (
        <div className="registration-form">
            <form>
                <label>Firmenname: <input type="text" className="form-control item" onChange={(e) => setNewJob({ ...newJob, companyName: e.target.value })} /></label>
                <label>Position: <input type="text" className="form-control item" onChange={(e) => setNewJob({ ...newJob, position: e.target.value })} /></label>
                <label>Start Datum: <input type="text" className="form-control item" onChange={(e) => setNewJob({ ...newJob, startDate: e.target.value })} /></label>
            </form>
            <button type="button" className="save btn btn-primary btn-block rounded-pill shadow-sm" onClick={(e) => handleAddJob(newJob, e)}>Save</button>
        </div>
    )
}
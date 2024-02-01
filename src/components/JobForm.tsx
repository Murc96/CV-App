import { useState } from "react";
import { JobData } from "./Types";

type JProps = {

    handleAddJob: (data: JobData) => any
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
                <label>Start Datum: <input type="date" className="form-control item" onChange={(e) => setNewJob({ ...newJob, startDate: e.target.value })} /></label>
                <label>End Datum: <input type="date" className="form-control item" onChange={(e) => setNewJob({ ...newJob, endDate: e.target.value })} /></label>
            </form>
            <button type="button" className="save btn btn-primary btn-block rounded-pill shadow-sm" onClick={() => handleAddJob(newJob)}>Save</button>
        </div>
    )
}
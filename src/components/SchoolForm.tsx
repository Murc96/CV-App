import { useState } from "react";
import { Education } from "./Types";

type SProps = {

    handleAddEducation: (data: Education, e: any) => any
}

export default function SchoolForm({handleAddEducation}: SProps) {

    const [newEducation, setNewEducation] = useState<Education>({
        school: "",
        adress: "",
        graduationYear: "",
    })


    return (
    <div className= "registration-form">
        <form>
            <label>Schule: <input type="text" className="form-control item" value={newEducation.school} onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })} /></label>
            <label>Abschluss: <input type="text" className="form-control item" value={newEducation.adress} onChange={(e) => setNewEducation({ ...newEducation, adress: e.target.value })} /></label>
            <label>Abschlussjahr: <input type="text" className="form-control item" value={newEducation.graduationYear} onChange={(e) => setNewEducation({ ...newEducation, graduationYear: e.target.value })} /></label>
            
        </form>
        <button type="button" className="save btn btn-primary btn-block rounded-pill shadow-sm" onClick={(e) => handleAddEducation(newEducation, e)}>Save</button>
    </div>
    )
}
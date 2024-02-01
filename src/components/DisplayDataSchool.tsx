import { useState } from "react";
import { Education } from "./Types";
import SchoolForm from "./SchoolForm";

export default function DisplayDataSchool() {
    const [educationList, setEducationList] = useState<Education[]>([]);

    const [editMode, setEditMode] = useState<boolean>(false);

    const handleAddClick = () => {
        setEditMode(true);
    }

    const handleAddEducation = (data: Education, e: any) => {
        e.preventDefault();
        setEducationList([...educationList, data]);
        setEditMode(false);
    };

    const handleDeleteEducation = (index: number) => {
        const updatedList = [...educationList];
        updatedList.splice(index, 1);
        setEducationList(updatedList);
    };

    return (<section>
        <h2>Schulische Laufbahn</h2>
        {editMode ? (<>
            {educationList.map((education, index) => (
                <div key={index}>
                    <div data-bs-theme="dark">
                    <button onClick={() => handleDeleteEducation(index)}type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <p>{`Schule: ${education.school}`}</p>
                    <p>{`Abschluss: ${education.adress}`}</p>
                    <p>{`Abschlussjahr: ${education.graduationYear}`}</p>
                </div>
            ))}
             <SchoolForm handleAddEducation={handleAddEducation} />
             
            </>
            
        ) : (
            <div>
                {educationList.map((education, index) => (
                    <div key={index}>
                        <div data-bs-theme="dark">
                    <button onClick={() => handleDeleteEducation(index)}type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                        <p>{`Schule: ${education.school}`}</p>
                        <p>{`Abschluss: ${education.adress}`}</p>
                        <p>{`Abschlussjahr: ${education.graduationYear}`}</p>
                    </div>
                ))}
                <button type="button" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm" onClick={handleAddClick}>Add</button>
            </div>
        )}
    </section>)
}
import { useState } from "react";
import Form from "./Form";
import { FormPersonalData } from "./Types";

export default function DisplayData () {
    const [personalData, setPersonalData] = useState({
        name: "",
        birthdate: "",
        adress: "",
        email: "",
        number: "",
    })

    const [editMode, setEditMode] = useState<boolean>(false)

    const handleEditClick = () => {
        setEditMode(true)
    }

    const handleSubmit = (data: FormPersonalData, e: any) => {
        e.preventDefault();
        setEditMode(false);
        setPersonalData({ ...data })
    }

    return (
        <div className="form-body">
            <h1>Lebenslauf</h1>

            <section className="form-holder">
                <h2>Persönliche Daten</h2>
                {editMode ? (<Form personalData={personalData} handleSubmit={handleSubmit} />
                ) : (
                    <>
                        <div>
                            <p>Name: {personalData.name}</p>
                            <p>Geburtsdatum: {personalData.birthdate}</p>
                            <p>Adresse: {personalData.adress}</p>
                            <p>E-Mail: {personalData.email}</p>
                            <p>Nummer: {personalData.number}</p>
                        </div>
                        <button onClick={handleEditClick} className="btn btn-primary btn-block rounded-pill shadow-sm">Edit</button>
                    </>
                )
                }
            </section>
        </div>
    )
}
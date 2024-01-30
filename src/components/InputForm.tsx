import { useState } from "react";
import Form from "./Form";
import { FormPersonalData } from "./Types";

export default function InputForm() {
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
        <div>
            <h1>Lebenslauf</h1>

            <section>
                <h2>Persönliche Daten</h2>
                {editMode ? (<Form personalData={personalData} handleSubmit={handleSubmit} />
                ) : (
                    <>
                        <div>
                            <p>Name: {personalData.name}</p>
                            <p>Birthdate: {personalData.birthdate}</p>
                            <p>Adress: {personalData.adress}</p>
                            <p>E-Mail: {personalData.email}</p>
                            <p>Number: {personalData.number}</p>
                        </div>
                        <button onClick={handleEditClick}>Edit</button>
                    </>
                )
                }
            </section>
        </div>
    )
}
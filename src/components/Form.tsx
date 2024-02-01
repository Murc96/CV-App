import { useState } from "react";
import { FormPersonalData } from "./Types";

type TProps = {
    personalData: {
        name: string,
        birthdate: string,
        adress: string,
        email: string,
        number: string,
    },

    handleSubmit: (data: FormPersonalData, e: any) => any;
}

export default function Form({ personalData, handleSubmit }: TProps) {

    const [data, setData] = useState(personalData);

    const handleChange = (field: string, value: string) => {
        switch (field) {
            case ('name'):
                setData({ ...data, [field]: value });
                break;
            case ('adress'):
                setData({ ...data, [field]: value });
                break;
            case ('email'):
                setData({ ...data, [field]: value });
                break;
            case ('number'):
                setData({ ...data, [field]: value });
                break;
            default:
                break;
        }
    }

    return (
    <div className= "form-body">
        <form className ="form-holder" onSubmit={(e) => handleSubmit(data, e)}>
            <label>Name: <input type="text" className="form-control item" value={data.name} onChange={(e) => handleChange("name", e.target.value)}></input></label>
            <label>Birthdate: <input type="date" className="form-control item" value={data.birthdate} onChange={(e) => handleChange("birthdate", e.target.value)}></input></label>
            <label>Adress: <input type="text" className="form-control item" value={data.adress} onChange={(e) => handleChange("adress", e.target.value)}></input></label>
            <label>E-Mail: <input type="text" className="form-control item" value={data.email} onChange={(e) => handleChange("email", e.target.value)}></input></label>
            <label>Number: <input type="text" className="form-control item" value={data.number} onChange={(e) => handleChange("number", e.target.value)}></input></label>
            <button type="submit" className="save btn btn-primary btn-block rounded-pill shadow-sm">Save</button>
        </form>
    </div>
    )
}
import { useState } from "react";
import InputForm from "./InputForm";
import SubmitButton from "./SubmitButton";
import { FormDataType } from "~/types/FormData";

export default function MainControls() {

    const [formData, setFormData] = useState<FormDataType>()

    const handleFormChange = (data: FormDataType) => {
        setFormData(data)
    }
    return (
        <div className="grid justify-center items-center h-96">
            <InputForm handleFormChange={handleFormChange}>
            </InputForm>
            <SubmitButton formData={formData!}>
            </SubmitButton>
        </div>


    )
}           
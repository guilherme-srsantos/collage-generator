import axios from "axios"
import React, { MouseEvent } from "react"
import { FormDataType } from "~/types/FormData"

type SubmitButtonProps = {
    formData: FormDataType
}

const SubmitButton: React.FC<SubmitButtonProps> = ({formData: data}) => {
    const handleClick = async () => {
        axios.post("/api/generate")    
    }

    return (
        
        <div className="flex justify-center items-center h-fit">
            <button className="rounded-full bg-blue-600 hover:to-blue-800 text-center w-auto px-8 py-4">
                Gerar
            </button>
        </div>
    )
}

export default SubmitButton
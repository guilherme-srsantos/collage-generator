import { Period } from "lastfm-njs"
import React, { ChangeEvent, useState } from "react"
import { FormDataType } from "~/types/FormData"


export interface InputProps {
    handleFormChange: (data: FormDataType) => void
}


const InputForm: React.FC<InputProps> = ({handleFormChange}) => {

    const [formData, setFormData] = useState<FormDataType>({ albumNames: false, height: 1, width: 1, period: Period.OVERALL, user: '' })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
        handleFormChange({...formData, [name]: value})
    }
    return (

        <div className="grid h-full justify-center text-center gap-3 w-max items-center rounded bg-teal-600 shadow m-auto p-5">

            <label> Nome de Usuário</label>
            <input
                onChange={handleInputChange}
                placeholder="Usuário"
                className="text-pretty rounded-xl text-center"
                name="user" >

            </input>


            <label>Período</label>
            <select className="shadow text-pretty text-center rounded" onChange={handleInputChange} name="period">
                <option value={Period.OVERALL}>Tudo</option>
                <option value={Period.WEEK}>1 semana</option>
                <option value={Period.MONTH}>1 mês</option>
                <option value={Period.THREE_MONTH}>3 meses</option>
                <option value={Period.SIX_MONTH}>6 meses</option>
                <option value={Period.YEAR}>1 ano</option>
            </select>


            <label>Tamanho:</label>
            <div className=" flex justify-center gap-2 text-center" >

                <select className="rounded" onChange={handleInputChange} name="width">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>10</option>
                </select>
                <p>x</p>
                <select className="rounded" onChange={handleInputChange} name="height">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div>
                <label></label>
                <input className="" type="checkbox">
                </input>
            </div>
        </div>

    )
}

export default InputForm

import { useState } from "react";
import { Button } from "../Button/Button.styles";
import Input from "./Input";




const FormAddItem = () => {
    const [isValid, setIsValid] = useState(true);

    const inputValidationHandler = (event : any) => {
        if (event.target.value.trim().length > 0) {
          setIsValid(true);
        }
        console.log(event.target.value);
      };

    const submitFormHandler= () =>{

    }

   
    return (
        <form  onSubmit={submitFormHandler} >
        <Input type='text'  maxLength={5} required={true} onChange={inputValidationHandler} />
        <Button size='medium' children="Add Task"/>

       </form>
    )
}

export default FormAddItem;
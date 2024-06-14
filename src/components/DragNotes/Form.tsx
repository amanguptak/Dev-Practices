import React, { ChangeEvent } from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import TextArea from './TextArea';
import { SingleNote } from "../note-db";
import { notesData } from "../note-db";

const initialValue ={
  id: Date.now().toString(),
  title:"",
  content: "",
}

const Form = () => {

  const [notes , setNotes] = useState<SingleNote[]>(notesData)
  const [inputValue, setInputValue] = useState<SingleNote>(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const {name , value } = e.target
    setInputValue({...inputValue ,[name] : value})
  };


  const handleSubmit = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    const newNotes = [...notes, inputValue];
    setNotes(newNotes);
    notesData.push(inputValue); // Update the external array
    setInputValue(initialValue);
    console.log("Updated Notes:", notesData);
  };
  return (
    <div className="flex flex-col items-center justify-center bg-black rounded-md p-3 m-3">
     <p className="text-3xl text-white font-bold my-3">Add Something Unique </p>
      <form >
        <Input name="title" onInputChange={handleChange} value={inputValue.title}/>
        <TextArea name="content" onDesChange={handleChange} value={inputValue.content}/>
        <Button onButtonSubmit={handleSubmit}>submit</Button>
      </form>
    </div>
  );
};

export default Form;

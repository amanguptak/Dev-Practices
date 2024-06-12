import React, { useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  useEffect(() => {
    console.log(inputValue);
   
  }, [inputValue]);

  const handleSubmit = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    console.log("Button submit");
  };
  return (
    <div>
      <form className="flex items-center justify-center bg-black rounded-md p-3 m-3">
        <Input onInputChange={handleInputChange} />
        <Button onButtonSubmit={handleSubmit}>submit</Button>
      </form>
    </div>
  );
};

export default Form;

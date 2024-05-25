import { ChangeEvent, useEffect, useRef } from "react";

interface IInput {
  onInputChange: (value: string) => void;
}

const Input = ({ onInputChange }: IInput) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        className="text-slate-700 w-[50%]   focus:border-amber-400 p-2 rounded m-4"
        onChange={handleChange}
      />
    </>
  );
};

export default Input;

interface ITextarea{
    onDesChange : (value:string) => void;
}

const TextArea = ({onDesChange}:ITextarea) => {
  return (
    <div>TextArea</div>
  )
}

export default TextArea
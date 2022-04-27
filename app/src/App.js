import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [name, setName] = useState('Luis');

  let divRef = useRef();
  let inputRef = useRef();

  const cambiar = () => {
    console.log(divRef.innerHTML);
    divRef.classList.add('alert', 'alert-danger');
    let button = document.createElement('button');
    button.innerHTML = `Click me ${name}` 
    divRef.appendChild(button);
  }

  const handleClickInput = e => {
    console.log(inputRef.current.value);
    inputRef.current.classList.add('form-control');
  }

  return (
    <>
      <div ref={(elem) => { divRef = elem }}>
        hola
      </div>
      <input type="text" ref={inputRef} />
      <button className="btn btn-success" onClick={cambiar}>Cambiar</button>
      <button className="btn btn-warning" onClick={handleClickInput}>Input Value</button>
    </>
  );
}

export default App;

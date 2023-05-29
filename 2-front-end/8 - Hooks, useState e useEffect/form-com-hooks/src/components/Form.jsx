import React, { useState } from "react";


function Form() {

  const [input, setInput] = useState({
    name: '',
    idade: '',
    cidade: '',
    modulo: '',
  });

  const handleInput = ({target}) => {
    setInput({...input, [target.name]: target.value})
  };

 return(
  <form>
    <input type="text" name="name" value={input.name} onChange={handleInput} placeholder="Nome completo"/>
    
    <input type="number" name="idade" value={input.idade} onChange={handleInput} placeholder="Idade" />

    <input type="text" name="cidade" value={input.cidade} onChange={handleInput} placeholder="cidade" />

    <input id="Fundamentos" type="radio" value="Fundamentos" name="modulo" checked={input.modulo=== 'Fundamentos'} onChange={handleInput}/><label htmlFor="Fundamentos">Fundamentos</label>

    <input id="Front-end" type="radio" value="Front-end" name="modulo" checked={input.modulo=== 'Front-end'} onChange={handleInput}/><label htmlFor="Front-end">Front-end</label>

    <input id="Back-end" type="radio" value="Back-end" name="modulo" checked={input.modulo=== 'Back-end'} onChange={handleInput}/><label htmlFor="Back-end">Back-end</label>

    <input id="Ciência" type="radio" value="Ciência da computação" name="modulo" checked={input.modulo=== 'Ciência da computação'} onChange={handleInput}/><label htmlFor="Ciência">Ciência da computação</label>
  </form>
 )
}

export default Form;
import { useEffect, useState } from "react"

//rfce
function ejemplosArreglos() {
    //Iniciamos con estado para un arreglo 
const [elementos,setElementos]=useState([]);

//crear una funcion para agregar datos
const agregarDatos=()=>{
  const nuevoNumero=Math.floor(Math.random()*50);
  setElementos([...elementos, nuevoNumero]);
};

//Metodo para recorrer el arreglo 
const recorerAgreglo=(elementos,index)=>(
  <li key={index} style={{margin: '5px 0', fontsize: '18px'}}>
  Elemento #{index+1};<strong>{elementos}</strong>
  </li>
)

//Hook de efecto 
useEffect(() => { 
  console.log("El arreglo de datos actual es: " , elementos);
},[elementos])

  return (
<>
    <h1>Mi primer arreglo de datos</h1>
    <div style={{padding: '20px' }}>
      <h2>Paso 1. Agreegar datos al arreglo</h2>
    <button onClick={agregarDatos}>Agregar numero aleatorio</button>
    <ul>
        {elementos.map(recorerAgreglo)}

      {/*Si el arreglo esta vacio enviar un mensaje  */}
      {elementos.length===0 ?(
        <> 
        <p> Aun no hay elementos en el arreglo</p>
        <p>Presiona el boton agregar datos </p>
        </>
  
      ):elementos.map (recorerAgreglo)}
     
    </ul>
    </div>
    </>
  )
}

export default ejemplosArreglos
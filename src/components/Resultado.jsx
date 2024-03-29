import useClima from "../hooks/useClima"

const Resultado = () => {
    
    const { resultado } = useClima()
    const { name, main } = resultado

    const gradosKelvin = 273.15

  return (
    <div className="contenedor clima">

      <h2>El clima de {name} es:</h2>
      <p> {parseInt(main.temp - gradosKelvin)} <span>&#x2103;</span></p>
      <div className="temp-min-max">
            <p> Min: {parseInt(main.temp_min - gradosKelvin)} <span>&#x2103;</span></p>
            <p> Max: {parseInt(main.temp_max - gradosKelvin)} <span>&#x2103;</span></p>
      </div>
     
    </div>
  )
}

export default Resultado

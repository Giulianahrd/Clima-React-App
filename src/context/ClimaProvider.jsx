import { useState, createContext } from "react"
import axios from "axios"

const ClimaContext = createContext()

const ClimaProvider = ( {children} ) => {

    const [ busqueda, setBusqueda ] = useState({
        ciudad: "",
        pais: ""
    })
    
    const [ resultado, setResultado ] = useState({})
    const [errors, setErrors ] = useState(false)
    const [ cargando, setCargando ] = useState(false)

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        setCargando(true)
        setErrors(false)

        try {
            const { ciudad, pais } = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const { data } = await axios(url)
            const { lat, lon } = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: clima} = await axios(urlClima)
            setResultado(clima)
            
        } catch (error) {
            setErrors("No se encontraron resultados")
            setResultado({})
        } finally {
            setCargando(false)
        }
    }

    return (
       <ClimaContext.Provider
          value={{
            busqueda,
            datosBusqueda,
            consultarClima, 
            resultado,
            cargando, 
            errors
          }}>
          {children}
       </ClimaContext.Provider>
    )
}

export {ClimaProvider}
export default ClimaContext

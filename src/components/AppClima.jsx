import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Loading from "./Loading";

const AppClima = () => {

    const { resultado, cargando, errors } = useClima()

  return (
    <div>
        <main className="dos-columnas">
            <Formulario/>

            {cargando? <Loading/> :
             resultado?.name ? <Resultado/> : 
             errors? <p>{errors}</p>:
              ""}
        </main>
      
    </div>
  )
}

export default AppClima


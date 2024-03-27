import './App.css'
import Header from './Componentes/Header.jsx'
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";




import Banner from "./assets/3582.jpg"

function App() {

  return (
    <>
      <div>
        <Header />

        <div className="relative flex flex-col items-center justify-center mt-1">
          <Image
            isBlurred
            className='w-[190vh] h-[40vh]'
            alt="banner"
            src={Banner}
          />

          <section className='text-center absolute z-10'>
            <h2 className='text-4xl'>Conversor de divisas</h2>
            <p>Le damos la Bienvenida a esta increible herrmienta para ver el valor del Dolar</p>
          </section>

          <Card>
            <CardBody>
              <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
          </Card>


        </div>


      </div>
    </>
  )
}

export default App

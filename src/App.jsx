import './App.css'
import Header from './Componentes/Header.jsx'
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";




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

          <section className='text-center mt-[-200px] z-10'>
            <h2 className='text-4xl'>Conversor de divisas</h2>
            <p>Le damos la Bienvenida a esta increible herrmienta para ver el valor del Dolar</p>
          </section>

          {/* donde el usuario seleciona la moneda a convertir */}
          <div className='flex justify-center items-center mt-20 z-10'>
            <Card className='shadow-lg sm:w-5/6 md:w-full lg:w-full xl:w-full h-auto' style={{ boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.4)' }}>
              <CardBody className='flex flex-col'>
                {/* Primera fila: inputs y selects */}
                <div className='flex flex-col sm:flex-row space-x-4'>
                  <Input type="importe" label="Importe" />
                  <Select
                    label="Seleciona la moneda"
                    className="max-w-xs"
                  >
                  </Select>
                  <Select
                    label="Moneda a convertir"
                    className="max-w-xs"
                  >
                  </Select>
                </div>
                {/* Segunda fila: texto */}
                <div className='mt-4'>
                  <p>Hola, ¿cómo estás?</p>
                </div>
                {/* Tercera fila: botón */}
                <section className='flex justify-end mt-4'>
                  <Button color="warning">
                    Ver la conversion de la moneda
                  </Button>
                </section>

              </CardBody>
            </Card>
          </div>

        </div>




      </div>
    </>
  )
}

export default App

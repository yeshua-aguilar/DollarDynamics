import './App.css'
import Header from './Componentes/Header.jsx'
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";




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

          <div className='flex justify-center items-center mt-[-20px] z-10'>
            <Card className='shadow-lg' style={{ boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.4)' }}>
              <CardBody>
                <div className='flex space-x-4'>
                  <Input type="email" label="Email" />
                  <Input type="password" label="Password" />
                  <Input type="text" label="Username" />
                </div>
              </CardBody>
            </Card>
          </div>

        </div>




      </div>
    </>
  )
}

export default App

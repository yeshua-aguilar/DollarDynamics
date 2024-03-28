import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './Componentes/Header.jsx'
import Footer from './Componentes/Footer.jsx'
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";



import { getExchangeRate, getAvailableCurrencies } from './Componentes/Api.jsx';
import Banner from "./assets/3582.jpg"
import NextUI_Icon from "./assets/nextui.png"

function App() {

  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    // Obtén la lista de monedas de la API y almacénala en el estado
    // Asegúrate de que esta función exista y haga lo que se supone que debe hacer
    getAvailableCurrencies().then(setCurrencies);
  }, []);

  const handleConvert = async () => {
    // Asegúrate de que 'fromCurrency' y 'toCurrency' son solo los códigos de las monedas, no los nombres de las monedas.
    let fromCurrencyCode = fromCurrency.split(',')[0];
    let toCurrencyCode = toCurrency.split(',')[0];

    // Asegúrate de que 'amount' es un número.
    let amountNumber = Number(amount);

    // Luego, puedes pasar estos valores a la función 'getExchangeRate'.
    const result = await getExchangeRate(fromCurrencyCode, toCurrencyCode, amountNumber);

    // Almacena el resultado en el estado
    setConvertedAmount(result);
  }

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
            <p>Le damos la Bienvenida a esta increible herrmienta para ver el valor de la Moneda</p>
          </section>

          {/* donde el usuario seleciona la moneda a convertir */}
          <div className='flex justify-center items-center mt-20 z-10'>
            <Card className='shadow-lg sm:w-[40rem] md:w-[40rem] lg:w-[50rem] xl:w-[70rem] h-[20rem]' style={{ boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.4)' }}>
              <CardBody className='flex flex-col'>
                {/* Primera fila: inputs y selects */}
                <div className='flex flex-col sm:flex-row space-x-4'>
                  <Input type="number" label="Importe" value={amount} onChange={e => setAmount(e.target.value)} /> {/* input donde se pone la cantidad */}
                  <Select label="Seleciona la moneda" className="max-w-xs" value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}> {/* Estos son los Select que hace que moneda queires elegir */}
                    {currencies.map(currency =>
                      <SelectItem key={currency} value={currency} textValue={currency}>{currency}</SelectItem>
                    )}
                  </Select>
                  <Select label="Moneda a convertir" className="max-w-xs" value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
                    {currencies.map(currency =>
                      <SelectItem key={currency} value={currency} textValue={currency}>{currency}</SelectItem>
                    )}
                  </Select>
                </div>
                {/* Segunda fila: texto */}
                <div className='mt-4'>
                  <p>
                    {amount} {fromCurrency.split(',')[1]} convertida =
                  </p>
                  <p className='text-4xl'>
                    {convertedAmount} de {toCurrency.split(',')[1]}
                  </p>
                </div>
                {/* Tercera fila: texto */}
                <br />
                <div>
                  <p className='text-small'>
                    Usamos la tasa del mercado medio para nuestro conversor. <br /> Esto solo tiene fines informativos. No recibirás esta tasa cuando envíes dinero o lo recibas.
                  </p>
                </div>
                {/* Cuarta fila: botón */}
                <section className='flex justify-end mt-4'>
                  <Button color="warning" onClick={handleConvert}>
                    Ver la conversion de la moneda
                  </Button>
                </section>

              </CardBody>
            </Card>
          </div>

          <div className='mt-40'>
            <p className='text-center text-2xl'>API de ExchangeRate-API</p>
            <br />
            <p>🌍 Tipos de conversión de 161 divisas</p>
            <p>🏆 Más de 10 años de tiempo de actividad y asistencia excepcionales.</p>
            <p>✅ Perfecto para SaaS, cuadros de mando y comercio electrónico.</p>
            <br />
            <section className='flex justify-center'>
              <Button color="primary" onClick={() => window.open('https://www.exchangerate-api.com/', '_blank')}>
                Ver mas informacion
              </Button>
            </section>
          </div>

          <div className='bg-orange-400 w-full h-auto mt-40 flex items-center justify-center p-10'>
            <div className='mr-40'>
              <Image
                isZoomed
                width={240}
                alt="Yeshua-Aguilar"
                src="https://github.com/yeshua-aguilar.png"
              />
            </div>
            <div>
              <p>Hola, ¿cómo estás?</p> <br />
              <p>Soy Yeshua Aguilar Creador de la pagina <br />
                este es uno de mis proyectos que he hecho <br />
                en mi tiempo libre. Espero que te haya ayudado.
              </p>
              <br />
              <p>Repositorio Github: <a>https://github.com/yeshua-aguilar/DollarDynamics</a> </p>
            </div>
          </div>

          <div className='mt-20 flex items-center space-x-10'>
              <Image
                width={240}
                src={NextUI_Icon}
                alt="NextUI"
                classNames="m-5"
              />
              <Image
                width={240}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                alt="NextUI"
                classNames="m-5"
              />
              <Image
                width={240}
                src="https://miro.medium.com/v2/resize:fit:1200/1*udvSMrSVGOgD4fxjMJHbOw.jpeg"
                alt="NextUI"
                classNames="m-5"
              />
              <Image
                width={240}
                src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/483c89d0-86f6-49ec-b8bd-3dec5bd1e1d3.png?fit=clip&auto=format&dpr=2"
                alt="NextUI"
                classNames="m-5"
              />
          </div>

        </div>

        <br />

        <Footer />

      </div>
    </>
  )
}

export default App

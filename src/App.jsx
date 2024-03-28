import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './Componentes/Header.jsx'
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";



import { getExchangeRate, getAvailableCurrencies } from './Componentes/Api.jsx';
import Banner from "./assets/3582.jpg"

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
            <p>Le damos la Bienvenida a esta increible herrmienta para ver el valor del Dolar</p>
          </section>

          {/* donde el usuario seleciona la moneda a convertir */}
          <div className='flex justify-center items-center mt-20 z-10'>
            <Card className='shadow-lg sm:w-[40rem] md:w-[40rem] lg:w-[50rem] xl:w-[70rem] h-[20rem]' style={{ boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.4)' }}>
              <CardBody className='flex flex-col'>
                {/* Primera fila: inputs y selects */}
                <div className='flex flex-col sm:flex-row space-x-4'>
                  <Input type="number" label="Importe" value={amount} onChange={e => setAmount(e.target.value)} />
                  <Select label="Seleciona la moneda" className="max-w-xs" value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
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
                  {amount} de {fromCurrency.split(',')[0]} a {toCurrency.split(',')[0]} es igual a {convertedAmount}
                </div>
                {/* Tercera fila: botón */}
                <section className='flex justify-end mt-4'>
                  <Button color="warning" onClick={handleConvert}>
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

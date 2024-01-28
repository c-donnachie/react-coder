import { useState } from "react";
import s from './PaymentCheckout.module.css';

export default function PaymentCheckout() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={s.container}>

      <div className={s.card}>
        <h3>Selecciona un método de pago:</h3>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="tarjeta"
            checked={selectedOption === 'tarjeta'}
            onChange={handleOptionChange}
          />
          Pago con tarjeta de credito o debito
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="transferencia"
            checked={selectedOption === 'transferencia'}
            onChange={handleOptionChange}
          />
          Transferencia bancaria
        </label>
        <br />
        <p>Seleccionado: {selectedOption}</p>
      </div>
    </div>

  )
}

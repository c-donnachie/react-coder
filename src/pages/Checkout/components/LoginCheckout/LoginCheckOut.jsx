import s from './LoginCheckout.module.css';
import { useContext } from 'react';
import { CheckoutContext } from '../../../../context/CheckoutContext';
import Button from '../../../../components/Button/Button';

export default function LoginCheckOut() {

  const {setCheckoutState } = useContext(CheckoutContext);

  return (
    <div className={s.container}>
      <div>
        <div className={s.subContainer}>
          <input className={s.input} type="text" placeholder="Rut" />
          <input className={s.input} type="text" placeholder="Contraseña" />
          <Button text="Iniciar sesión" />
        </div>
      </div>
      <div>
        <div className={s.subContainer}>
          <Button text="Continuar como invitado" onClick={() => setCheckoutState(2)} />
        </div>
      </div>
    </div>
  )
}

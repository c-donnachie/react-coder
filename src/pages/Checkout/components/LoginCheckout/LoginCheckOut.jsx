import s from './LoginCheckout.module.css';
import { useContext } from 'react';
import { CheckoutContext } from '../../../../context/CheckoutContext';

export default function LoginCheckOut() {

  const {setCheckoutState } = useContext(CheckoutContext);

  return (
    <div className={s.container}>
      <div>
        <div className={s.subContainer}>
          <input className={s.input} type="text" placeholder="Rut" />
          <input className={s.input} type="text" placeholder="Contraseña" />
          <button>Iniciar Sesion</button>
        </div>
      </div>
      <div>
        <div className={s.subContainer}>
          <button onClick={() => setCheckoutState(2)}>Seguir como invitado </button>
        </div>
      </div>
    </div>
  )
}

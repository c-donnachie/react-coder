import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.container}>

      <div className={s.cardHeader}>
        <h2 className={s.cardHeader__title}>ÚNETE AL CLUB Y RECIBE 500 PUNTOS DE BIENVENIDA</h2>
      </div>

      {/* <div className={s.cardContent}>
        <p>as</p>
      </div> */}

      <div className={s.cardFooter}>
        <span>Pagina creada por <a href="https://github.com/c-donnachie">@c-donnachie</a> </span>
      </div>
    </footer>
  )
}

import s from './Footer.module.css'

export default function Footer() {
  return (
    <section className={s.card}>
      {/* grid container */}
      <div>
        <div>
          contenido
        </div>

      </div>

      {/* bottom container */}
      <div className={s.bottomCard}>
        <span>Pagina creada 2024</span>
      </div>
    </section>
  )
}

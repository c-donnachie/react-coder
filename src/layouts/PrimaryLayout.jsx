import Footer from "../components/Footer/Footer"
import s from './PrimaryLayout.module.css'

export default function PrimaryLayout({children}) {
  return (
      <div className={s.layout}>
            <main>
                {children}
            </main>
            
          <Footer/>
    </div>
  )
}

import Lottie from "lottie-react"
import loadingGif from "../../assets/animations/loadingGif.json"
import s from './LoadingGif.module.css';

export default function LoadingGif() {
  return (
    <div className={s.container}>
      <div className={s.gif}>
        <Lottie animationData={loadingGif} />
      </div>
    </div>
  )
}

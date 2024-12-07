import Carousel from "./Components/Carousel"
import imageslide from './Data.json'
export default function App(){
  return (<div >
    <h1>Raman's Image Slider</h1>
    <Carousel data={imageslide} />
    </div>
  )
}

  //  found this image on lorempicsum

import './Carousel.css'
import React from 'react'
import {BsArrowLeftCircleFill , BsArrowRightCircleFill} from 'react-icons/bs'
import {useState} from 'react'

function Carousel({data}) {
 
  const[slide,setSlide]=useState(0);
  const nextSlide =()=>{
    setSlide(slide===data.imageslide.length-1? 0: slide+1);
  }
  const prevSlide=()=>{
    setSlide(slide===0? data.imageslide.length-1:slide-1);
  }
  return (
   
   <div className="carousel">

   <BsArrowLeftCircleFill className=" arrow arrow-left" onClick={prevSlide}/>
 {data.imageslide.map((item, index) => 
     {return <img src={item.url} alt={item.title}key={index}  className={slide===index?"slide":"slide slide-hidden"}/>  }      //( )  works as return
  )}  
  <BsArrowRightCircleFill className=" arrow arrow-right" onClick={nextSlide} />
  <span className='indicators'> 
    {data.imageslide.map((_,index) =>
    {return <button key={index} onClick={()=>setSlide(index)} className= {slide===index? "Lbutton" :"Lbutton Lbutton-inactive" } > </button>   //Tala ko point button banako
      })}
  </span>
    </div>
  )
}

export default Carousel

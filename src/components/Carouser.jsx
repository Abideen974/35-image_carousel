import React,{useEffect, useRef} from 'react'
import './carouser.css'
import Image1 from './picture/a.jpg'
import Image2 from './picture/b.jpg'
import Image3 from './picture/c.jpg'
import Image4 from './picture/d.jpg'

function Carouser() {
  const img = useRef(null)
  const leftbtn = useRef(null)
  const rightbtn = useRef(null)
  
  
  let idx = 0;
  
  useEffect(()=>{
    const image = document.querySelectorAll('#imgs img')
      console.log(idx)
    const run = () => {
      idx++;
      changeImage()
    }
  
    const changeImage = () => {
      if(idx > image.length - 1) {
    idx = 0;
  
  }else if(idx < 0) {
    idx = image.length - 1;
  }
  
  img.current.style.transform = `translateX(${idx * -300}px)`
    }
  
  let interval = setInterval(run,5000)

  function reset() {
    clearInterval(interval)
    interval = setInterval(run,5000)
  }

  rightbtn.current.addEventListener('click',()=>{
    idx++
    changeImage()
    reset()
  })
  leftbtn.current.addEventListener('click',()=>{
    idx--
    changeImage()
    reset()
  })
  },[idx])
  return (
    <>
        <div className="carousel">
            <div className="image-container" id="imgs" ref={img}>
                <img src={Image1} alt="" />
                {/* <img src={Image2} alt="" /> */}
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />

            </div>
            <div className="buttons-container">
                <button id="left" className='btn' ref={leftbtn}>Prev</button>
                <button id="right" className='btn' ref={rightbtn}>Next</button>
            </div>
        </div>
    </>
  )
}

export default Carouser
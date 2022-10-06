import crossTrainingImage from "../sliderImages/taekwondoCrosstraining.webp"
import bigBigImage from "../sliderImages/bigTaekwondoTraining.jpg"
import demoTeam from "../sliderImages/taekwondoDemoteam2.webp"
import { useEffect, useState } from "react"


export default function HomeSlider(){
    const [imagesLoaded, setImagesLoaded] = useState(false)
    let imageArray = [crossTrainingImage, bigBigImage, demoTeam]
    let [imageArrayPosition, setImageArrayPosition] = useState(0)
    let [isAnimationRunning, setIsAnimationRunning] = useState(false)

    useEffect(() =>{
        const loadImage = image => {
            return new Promise((resolve, reject) => {
              const loadImg = new Image()
              loadImg.src = image.url
              // wait 2 seconds to simulate loading time
              loadImg.onload = () =>
                setTimeout(() => {
                  resolve(image.url)
                }, 2000)
      
              loadImg.onerror = err => reject(err)
            })
        }
    
        ///Runs the function
        Promise.all(imageArray.map(image => loadImage(image)))
        .then(() => setImagesLoaded(true))
        .catch(err => console.log("Failed to load images", err))
    }, [])


    function arrowClicked(moveThroughArray){
        setIsAnimationRunning(true)
        ///Determines which direction arrow was clicked
        ///moveThroughArray = 1 or -1 depending on arrow clicked
        if(moveThroughArray === 1){
            ///Right Arrow Clicked
            document.getElementById("home-slider-image").classList.add("image-slide-right")

            setTimeout(() =>{
                ///End slide off animation and start slide on animation
                setImageArrayPosition(prev => prev + moveThroughArray)
                document.getElementById("home-slider-image").classList.remove("image-slide-right")
                document.getElementById("home-slider-image").classList.add("image-slide-right-second")
                setIsAnimationRunning(false)
            }, 800)
        }else{
            ///Left Arrow Clicked
            document.getElementById("home-slider-image").classList.add("image-slide-left")

            setTimeout(() =>{
                ///End slide off animation and start slide on animation
                setImageArrayPosition(prev => prev + moveThroughArray)
                document.getElementById("home-slider-image").classList.remove("image-slide-left")
                document.getElementById("home-slider-image").classList.add("image-slide-left-second")
                setIsAnimationRunning(false)
            }, 800)
        }

        ///Remove class for image slide on animation
        setTimeout(() =>{
            document.getElementById("home-slider-image").classList.remove("image-slide-left-second")
            document.getElementById("home-slider-image").classList.remove("image-slide-right-second")
        }, 1600)

    } 

    ///Loops imageArrayPosition to ends of the array
    useEffect(() =>{
        if(imageArrayPosition < 0){
            setImageArrayPosition(imageArray?.length-1)
        }
        if(imageArrayPosition >= imageArray?.length){
            setImageArrayPosition(0)
        }    
    }, [imageArrayPosition])

    ///Change if I change to slider
    if(!imageArray) return null
    // if(!imagesLoaded) return null

    return(
        <div className="slider-containter">
        {isAnimationRunning ? 
            <div className="slider">
                <div id="slider-left-arrow" className="slider-left-arrow slider-arrow"></div>
                    <img id="home-slider-image" className="slider-image-initial" alt="Taekwondo Image Slider" src={imageArray[imageArrayPosition]} />
                <div id="slider-right-arrow" className="slider-right-arrow slider-arrow"></div>
            </div>
        :
            <div className="slider">
                <div id="slider-left-arrow" onClick={() => arrowClicked(-1)} className="slider-left-arrow slider-arrow"></div>
                    <img id="home-slider-image" className="slider-image-initial" alt="Taekwondo Image Slider" src={imageArray[imageArrayPosition]} />
                <div id="slider-right-arrow" onClick={() => arrowClicked(1)} className="slider-right-arrow slider-arrow"></div>
            </div>
        }       
        </div>
    )
}
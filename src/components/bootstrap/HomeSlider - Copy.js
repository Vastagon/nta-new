import crossTrainingImage from "../sliderImages/crosstraining.jpg"
import bigBigImage from "../sliderImages/bigbig.jpg"
import demoTeam from "../sliderImages/demoteam.jpeg"
import { useEffect, useState } from "react"


export default function HomeSlider(){
    let imageArray = [crossTrainingImage, bigBigImage, demoTeam]
    let [imageArrayPosition, setImageArrayPosition] = useState(0)
    let [isAnimationRunning, setIsAnimationRunning] = useState(false)

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
            }, 430)
        }else{
            ///Left Arrow Clicked
            document.getElementById("home-slider-image").classList.add("image-slide-left")

            setTimeout(() =>{
                ///End slide off animation and start slide on animation
                setImageArrayPosition(prev => prev + moveThroughArray)
                document.getElementById("home-slider-image").classList.remove("image-slide-left")
                document.getElementById("home-slider-image").classList.add("image-slide-left-second")
                setIsAnimationRunning(false)
            }, 430)
        }

        ///Remove class for image slide on animation
        setTimeout(() =>{
            document.getElementById("home-slider-image").classList.remove("image-slide-left-second")
            document.getElementById("home-slider-image").classList.remove("image-slide-right-second")
        }, 1000)

    }

    ///Loops imageArrayPosition to ends of the array
    useEffect(() =>{
        if(imageArrayPosition < 0){
            setImageArrayPosition(imageArray.length-1)
        }
        if(imageArrayPosition >= imageArray.length){
            setImageArrayPosition(0)
        }    
    }, [imageArrayPosition])


    return(
        <>
         {isAnimationRunning ? 
            <div className="slider">
                <div id="slider-left-arrow" className="slider-left-arrow slider-arrow"></div>
                <img id="home-slider-image" className="slider-image-initial" alt="not found" src={imageArray[imageArrayPosition]} />
                <div id="slider-right-arrow" className="slider-right-arrow slider-arrow"></div>
            </div>
        :
            <div className="slider">
                <div id="slider-left-arrow" onClick={() => arrowClicked(-1)} className="slider-left-arrow slider-arrow"></div>
                <img id="home-slider-image" className="slider-image-initial" alt="not found" src={imageArray[imageArrayPosition]} />
                <div id="slider-right-arrow" onClick={() => arrowClicked(1)} className="slider-right-arrow slider-arrow"></div>
            </div>
        }       


        </>
    )
}
import React, { useEffect, useState } from 'react'
import strites from '../public/images/lamp_sprites.png'
import sprites_back from '../public/images/lamp_sprites_back.png'

import '../public/style/lamp.css'

import { useSprite } from 'react-sprite-animator'

const Lamp = () => {

    const [ sprite, setSprite ] = useState(strites);
    const [ stopAnim, setAnim ] = useState(false);

    const [ toggler, setToggler ] = useState(false);

    const style = useSprite({
        sprite: sprite,
        width: 1280,
        height: 720,
        direction: "vertical",
        shouldAnimate: stopAnim,
        fps: 29.5,
        stopLastFrame: true,
        frame: 0,
        frameCount: 59
    })

    /*useEffect(() => {
        setTimeout(() => {
            if (sprite === strites) {
                setSprite(sprites_back)
            } else {
                setSprite(strites)
            }
        }, 2200)
    }, [sprite])*/

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    useEffect(() => {
        if (window.innerWidth > 1280 && window.location.pathname === "/") {
            clearInterval(window.animInterval)
        window.animInterval = setInterval(() => {
            if (isInViewport(document.getElementById("lamp_anim"))) {
                setAnim(true)
                clearInterval(window.animInterval)
                setToggler(!toggler)
            }
        }, 500);
    }
    }, [])

    if (window.innerWidth < 1280) {
        return (<></>)
    } else {
        return (
            <>
            <div style={ { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "auto", marginTop: "50px" } }>
            <div id="lamp_anim" style={style}>
                <div className={ toggler ? "fade-in" : "fade-out" } style={  toggler ? { position: "absolute", width: "1280px", height: "720px", zIndex: "1000" } : {  display: "none", position: "absolute", width: "100%", height: "720px", zIndex: "1000" }}>
                    <div style={{ height: "50%", width: "100%", display: "flex" }}>
                        <div style={{ height: "100%", width: "30%", paddingLeft: "250px" }}>
                            <p style={{ fontSize: "25px", lineHeight: "24px", paddingTop: "15px" }}>Колба</p>
                            <div style={{ borderLeft: "1px solid #0db2b3", height: "270px", maxWidth: "2px" }}></div>
                        </div>
                        <div style={{ height: "100%", width: "30%", paddingLeft: "50px", paddingTop: "50px" }}>
                            <p style={{ fontSize: "25px", lineHeight: "24px", paddingTop: "15px" }}>Світлодіодна підложка</p>
                            <div style={{ borderLeft: "1px solid #0db2b3", height: "240px", maxWidth: "2px" }}></div>
                        </div>
                        <div style={{ height: "100%", width: "30%" }}>
                            <p style={{ fontSize: "25px", lineHeight: "24px", paddingTop: "15px" }}>Пластикове покриття</p>
                            <div style={{ borderLeft: "1px solid #0db2b3", height: "220px", maxWidth: "2px" }}></div>
                        </div>
                    </div>
                    <div style={{ height: "50%", width: "100%", display: "flex", paddingLeft: "30%" }}>
                    <div style={{ height: "100%", width: "30%", paddingLeft: "130px" }}>
                            
                            <div style={{ borderLeft: "1px solid #0db2b3", height: "270px", maxWidth: "2px" }}></div>
                            <p style={{ fontSize: "25px", lineHeight: "24px", paddingTop: "15px" }}>Драйвер</p>               
                        </div>
                        <div style={{ height: "100%", width: "30%", paddingLeft: "50px", paddingBottom: "50px" }}>
                            
                            <div style={{ borderLeft: "1px solid #0db2b3", height: "270px", maxWidth: "2px" }}></div>
                            <p style={{ fontSize: "25px", lineHeight: "24px", paddingTop: "15px" }}>Металевий корпус</p>
                        </div>
                        <div style={{ height: "100%", width: "30%", position: "absolute", marginLeft: "45%", top: "250px"}}>
                            <div style={{ borderLeft: "1px solid #0db2b3", height: "280px", maxWidth: "2px" }}></div>
                            <p style={{ fontSize: "25px", lineHeight: "24px", paddingTop: "15px" }}>Цоколь</p>
                        </div>
                    </div>
                </div>
        
            </div>  
            </div>
            </>
            )
    }
}

export default Lamp;
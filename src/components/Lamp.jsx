import React, { useEffect, useState } from 'react'
import strites from '../public/images/lamp_sprites.png'
import sprites_back from '../public/images/lamp_sprites_back.png'

import { useSprite } from 'react-sprite-animator'

const Lamp = () => {

    const [ sprite, setSprite ] = useState(strites);
    const [ stopAnim, setAnim ] = useState(false);

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
        window.animInterval = setInterval(() => {
            if (isInViewport(document.getElementById("lamp_anim"))) {
                setAnim(true)
                clearInterval(window.animInterval)
            }
        }, 300);
    }, [])

    return (
    <>
    <div style={ { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "auto" } }>
    <div id="lamp_anim" style={style} onClick={() => {
        
    }}/>
    </div>
    </>
    )
}

export default Lamp;
import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../buttons/ButtonElements';
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './heroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBackground>
            <HeroContent>
                <HeroH1>
                    Face to Face and Virtual <br></br>Math Tutoring
                </HeroH1>
                <HeroP>
                    Whether it's getting help with tough classes, preparing to ace exams, or keeping
                    your skills sharp over breaks, we are here to assist you in your math journey. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button id="btn" to='about' onMouseEnter={onHover} 
                    onMouseLeave={onHover} primary dark fontBig >
                        Let's Go! {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

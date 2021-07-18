import React from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroH1,
    HeroP
} from './heroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBackground>
            <HeroContent>
                <HeroH1>
                    Face to Face and Virtual Math Tutoring
                </HeroH1>
                <HeroP>
                    Whether it's getting help with tough classes, preparing to ace exams, or keeping math
                    skills sharp over breaks, we are here to assist you in your math journey. 
                </HeroP> 
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

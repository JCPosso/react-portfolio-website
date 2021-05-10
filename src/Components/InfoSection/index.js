import React from 'react';
import { homeS2 } from './Data';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    ImgWrap,
    Img,
    TopLine,
    TextWrapper,
    Heading,
    Subtitle
} from './InfoElements';
import InfoTab from './InfoTab';
const InfoSection = ({
    img,
    alt,
    imgStart,
    lightBg,
    id,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    hasList
    }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart} >
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            {hasList ? <InfoTab {...homeS2}/>: <></>}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

import Video from "../assests/videos/CoffeeShopBg.mp4"

// styled components
const Section1Container = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content:center;
  align-items: center;
  color: #fff;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  }
`
const Section1Bg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height:100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height:100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const Section1Content = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const Section1Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`
const Section1H1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const Section1P = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`

const Section1 = () => {
  return (
    <Section1Container>
      <Section1Bg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </Section1Bg>

      <Section1Content>
        <Section1Items>
          <Section1H1>Unreal Destinations</Section1H1>
          <Section1P>Out of this world</Section1P>
          <Button primary='true' big='true' round='true' to="/trips">Travel Now</Button>
        </Section1Items>
      </Section1Content>

    </Section1Container>
  )
}

export default Section1

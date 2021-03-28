import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'

import { Button } from "./Button"

const Section2Container = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  background-color: #804827;
`
const Section2Heading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const Section2Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868) {
    grid-template-columns: 1fr;
  }
`
const Section2Card = styled.div`
  line-height: 2;
  width: 100%;
  height: 600px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#077BF1')};
`
const Section2Img = styled(Img)`
  top: 30px;
  height: 60%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`
const Section2Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  vertical-align: middle;
`
const Section2Name = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
const Section2Price = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
const Section2Description = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`

const Section2 = ({ heading }) => {
  const data= useStaticQuery(graphql`
    query DrinksInfoQuery {
      allDrinksJson {
        edges {
          node {
            alt
            button
            name
            description
            price
            backgroundColor
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const getDrinks = (data) => {
    const drinksArray = []
    data.allDrinksJson.edges.forEach((item, index) => {
      drinksArray.push(
        <Section2Card key={index} backgroundColor={item.node.backgroundColor}>
          <Section2Img fluid={item.node.img.childImageSharp.fluid} alt={item.node.alt} />
          <Section2Info>
            <TextWrap>
              <Section2Price>{item.node.price}</Section2Price>
              <Section2Name>{item.node.name}</Section2Name>
              <Section2Description>{item.node.description}</Section2Description>
            </TextWrap>
            <Button primary="true" round="true" css={`position: absolute; top: 500px; font-size: 14px;`} to="/trips">{item.node.button}</Button>
          </Section2Info>
        </Section2Card>
      )
    })
    return drinksArray
  }

  return (
    <Section2Container>
      <Section2Heading>{heading}</Section2Heading>
      <Section2Wrapper>{getDrinks(data)}</Section2Wrapper>
    </Section2Container>
  )
}

export default Section2

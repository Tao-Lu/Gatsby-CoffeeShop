import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'


const Section4Container = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  background-color: #8b5632;
`
const Section4Heading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const Section4Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px;
  justify-items: center;
  padding: 0 2rem;
  vertical-align: middle;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868) {
    grid-template-columns: 1fr;
  }
`
const Section4Card = styled.div`
  line-height: 2;
  width: 100%;
  height: 600px;
  position: relative;
  border-radius: 0px;
  transition: 0.2s ease;
  background-color: #b78958;
  align-items: center;
  vertical-align: middle;
`
const Section4Img = styled(Img)`
  top: 120px;
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
const Section4Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  vertical-align: middle;
`
const Section4Name = styled.div`
  font-weight: 400;
  font-size: 4rem;
  margin-left: 0.5rem;
`
const Section4Price = styled.div`
  font-weight: 400;
  font-size: 2rem;
  margin-left: 0.5rem;
`
const Section4Description = styled.div`
  font-weight: 400;
  font-size: 3rem;
  margin-left: 0.5rem;
`

const Section4 = () => {
  const data= useStaticQuery(graphql`
    query CoffeePowderQuery {
      allCoffeepowderJson {
        edges {
          node {
            alt
            description
            name
            price
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

  return (
    <Section4Container>
      <Section4Wrapper>
        <Section4Card>
          <Section4Img fluid={data.allCoffeepowderJson.edges[0].node.img.childImageSharp.fluid} alt={data.allCoffeepowderJson.edges[0].node.alt} />
        </Section4Card>
        <Section4Card>
          <Section4Info>
            <TextWrap>
              <Section4Price>{data.allCoffeepowderJson.edges[0].node.price}</Section4Price>
              <Section4Name>{data.allCoffeepowderJson.edges[0].node.name}</Section4Name>
              <Section4Description>{data.allCoffeepowderJson.edges[0].node.description}</Section4Description>
            </TextWrap>
          </Section4Info>
        </Section4Card>
      </Section4Wrapper>
    </Section4Container>
  )
}

export default Section4

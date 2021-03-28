import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'

import Croissant from "../assests/images/Croissants.png"

const Section3Container = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  background-color: #a5784b;
`

const Section3Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
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
const Section3Card = styled.div`
  line-height: 2;
  width: 100%;
  height: 600px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  background-color: #a5784b;
  vertical-align: middle;
`
const Section3Img = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`
const Section3Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  vertical-align: middle;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
top: 120px;
  display: flex;
  flex-direction: column;
  position: absolute;
  vertical-align: middle;
`
const Section3Name = styled.div`
  font-weight: 400;
  font-size: 4rem;
  margin-left: 0.5rem;
  vertical-align: middle;
`
const Section3Price = styled.div`
  font-weight: 400;
  font-size: 2rem;
  margin-left: 0.5rem;
  vertical-align: middle;
`
const Section3Description = styled.div`
  font-weight: 400;
  font-size: 3rem;
  margin-left: 0.5rem;
  vertical-align: middle;
`


const Section3 = () => {
  const data= useStaticQuery(graphql`
    query CroissantsInfoQuery {
      allCroissantsJson {
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
    <Section3Container>
      <Section3Wrapper>
        <Section3Card>
          <Section3Info>
            <TextWrap>
              <Section3Price>{data.allCroissantsJson.edges[0].node.price}</Section3Price>
              <Section3Name>{data.allCroissantsJson.edges[0].node.name}</Section3Name>
              <Section3Description>{data.allCroissantsJson.edges[0].node.description}</Section3Description>
            </TextWrap>
          </Section3Info>
        </Section3Card>
        <Section3Card>
          <Section3Img fluid={data.allCroissantsJson.edges[0].node.img.childImageSharp.fluid} alt="Croissants" />
        </Section3Card>
      </Section3Wrapper>
    </Section3Container>
  )
}

export default Section3

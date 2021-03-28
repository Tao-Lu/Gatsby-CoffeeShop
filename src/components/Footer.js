import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby";

import CoffeeShopLogo from "../assests/images/coffeeShopLogo.png"

// styled components
const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s, ease-out;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Coffee Shop</h1>
          <p>We serve the richest coffee in the city!</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>About Us</FooterLinkTitle>
          <p>about us</p>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/sponsorships">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>

      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <p>address</p>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/sponsorships">Sponsorships</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Opening Hours</FooterLinkTitle>
          <p>Mon – Fry — 8AM – 8PM</p>
          <p>Saturday — 8AM – 4PM</p>
          <p>Sunday — 8AM – 2PM</p>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/sponsorships">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

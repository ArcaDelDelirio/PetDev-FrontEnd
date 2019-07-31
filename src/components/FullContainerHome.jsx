import React from 'react'
import { Container } from 'semantic-ui-react'
import HeaderFanimals from './MenuHomePage';
import ContainerHomePage from './ContainerHomePage';
import Footer from './FooterHomePage';

const FullHomePage = () => (
  <Container>
 <HeaderFanimals/>
 <ContainerHomePage/>
 <Footer/>
    
  </Container>
)

export default FullHomePage
import { Box, styled } from '@mui/material'

import Header from '../components/Header'
import Footer from '../components/Footer'

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0, 6),
}))

const Default = ({ children }) => {

  return (
    <>
      <Header />    
      <StyledBoxContainer>
        {children}
      </StyledBoxContainer>    
      <Footer />
    </>
  )
}

export default Default
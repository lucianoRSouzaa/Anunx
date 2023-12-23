import { styled } from '@mui/system'
import { Container, Box, InputLabel } from '@mui/material'

export const StyledContainerTitle = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
}))

export const StyledContainerBox = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(4),
}))

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontWeight: 400,
  color: theme.palette.primary.main,
}))
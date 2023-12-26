import { styled } from '@mui/system'
import {
  Container,
  FormControl,
  Button,
  CircularProgress,
  Alert,
  Box
} from '@mui/material'

export const StyledContainerTitle = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(4),
}))

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  marginTop: 6,
}))

export const StyledButtonSubmit = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}))

export const StyledCircularProgress = styled(CircularProgress)(() => ({
  display: 'block',
  margin: '20px auto 5px auto',
}))

export const AlertLoginError = styled(Alert)(() => ({
  marginBottom: 25,
}))

export const StyledBoxOrSeparator = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  width: '100%',
  height: 1,
  margin: theme.spacing(7, 0, 4),
}))

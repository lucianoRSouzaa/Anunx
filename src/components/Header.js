import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Container,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    styled,
} from '@mui/material'
import Link from 'next/link'

import { AccountCircle } from '@mui/icons-material'

const StyledMenuLink = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none'
}))
const StyledLogoLink = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none',
  flexGrow: 1
}))

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)
  const session = useSession()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <StyledLogoLink href='/' passHref>
              <Typography variant="h6" component="div">
                Anunx
              </Typography>
            </StyledLogoLink>
            <Link href={session ? '/user/publish' : '/auth/signin'} passHref style={{ color: 'inherit' }}>
               <Button color="inherit" variant="outlined" sx={{ mr: 3 }}>Anunciar e Vender</Button>
            </Link>

            {
              session.data && session.data.user
               ? (
                  <IconButton color="secondary" onClick={e => setAnchorUserMenu(e.currentTarget)}>
                    {
                      session.data.user.image
                        ? <Avatar src={session.data.user.image} />
                        : <AccountCircle />
                    }
                    <Typography variant="subtitle2" color="secondary" sx={{ ml: 1.2 }}>
                      {session.data.user.name}
                    </Typography>
                  </IconButton>
               ) : null
            }

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <StyledMenuLink href="/user/dashboard" passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </StyledMenuLink>
              <StyledMenuLink href="/user/publish" passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </StyledMenuLink>
              <Divider style={{ margin: '5px 0' }} />
              <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

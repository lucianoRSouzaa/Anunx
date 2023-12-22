import { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'
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


const StyledMenuLink = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none'
}))

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href="/user/publish" passHref style={{ color: 'inherit' }}>
               <Button color="inherit" variant="outlined" sx={{ mr: 2 }}>Anunciar e Vender</Button>
            </Link>
            {/* setando o estado com o elemento atual (currentTarget) */}
            <IconButton color="secondary" onClick={e => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                 ? <Avatar src="" />
                 : <AccountCircle />
              }
              <Typography variant="subtitle2" color="secondary" sx={{ ml: 1.2 }}>
                Luciano Souza
              </Typography>
            </IconButton>

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
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/system'

type Props = {}
const Header = (props: Props) => {
    const home = true
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: home ? 'black' : 'green',
            }}
        >
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Payment</Button>
                    <Button color="inherit">Shipping</Button>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header

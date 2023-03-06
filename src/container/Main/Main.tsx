import { Container } from '@mui/system'
import Home from 'pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container
            sx={{
                padding: '40px 0',
            }}
        >
            <Home />
        </Container>
    )
}
export default Main

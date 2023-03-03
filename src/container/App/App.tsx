import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {}
const App = (props: Props) => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
export default App

import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData] = useState<CartData>({
        totalCount: 10,
        totalPrice: 100,
    })

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header
                totalCount={cartData.totalCount}
                totalPrice={cartData.totalPrice}
            />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App

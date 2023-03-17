import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: ProductsInCartType) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={productsInCart} />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App

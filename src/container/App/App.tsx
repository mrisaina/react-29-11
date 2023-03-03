import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
export default App

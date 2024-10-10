import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import '../styles/globals.scss'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Container>
                    <Header />
                    {children}
                    <Footer />
                </Container>
            </body>
        </html>
    )
}
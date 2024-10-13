import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import '../styles/globals.scss'

import { PT_Sans_Narrow } from 'next/font/google'
 
const font = PT_Sans_Narrow({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Container>
                    <Header />
                    {children}
                    <Footer />
                </Container>
            </body>
        </html>
    )
}
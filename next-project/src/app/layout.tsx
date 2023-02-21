import '@/styles/globals.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="grid-container">
          <HeaderComponent />
          <main>
            {children}
          </main>
          <FooterComponent />
        </div>
      </body>
    </html>
  )
}

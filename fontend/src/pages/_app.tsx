import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/redux/Store';
import { Provider } from 'react-redux';
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: {
  session,
  ...pageProps
} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

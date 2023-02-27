import { useAppSelector, useAppDispatch } from '@/redux/Hooks'
import { userAction } from '@/redux/actions/usersAction'
import Head from 'next/head'
import HeaderComponent from './components/HeaderComponent'
import SideBarComponent from './components/SideBarComponent'
import LoginScreen from './screens/LoginScreen'
import { useEffect } from 'react'
export default function Home() {
  const users = useAppSelector(state => state.users)

  useEffect(() => {
  }, [users])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      <div className="grid-container">
        <HeaderComponent />
        <SideBarComponent />
        <main>
          Homw
        </main>
        <footer>footer</footer>
      </div>
      </body>
    </>
  )
}



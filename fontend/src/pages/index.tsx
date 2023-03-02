import { useAppSelector, useAppDispatch } from '@/redux/Hooks'
import { userAction } from '@/redux/actions/usersAction'
import Head from 'next/head'
import HeaderComponent from '@/components/HeaderComponent'
import SideBarComponent from '@/components/SideBarComponent'
import LoginScreen from './screens/LoginScreen'
import { useEffect } from 'react'
import Layout from '@/components/Layout'
import { signOut } from 'next-auth/react'
export default function Home() {
signOut()
  return ( 
    <Layout title='home'>
      asdfasdfasdf
    </Layout>
  )
}



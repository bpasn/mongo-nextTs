import Head from "next/head"
import React from 'react'
import HeaderComponent from './HeaderComponent'
import SideBarComponent from './SideBarComponent'

type Props = {
    title: string,
    children?: JSX.Element | JSX.Element[] | string | string[]
}

const Layout: React.FC<Props> = ({ title, children }) => {
    return (
        <div  className="grid-container">
            <Head>
                <title>{title ? title : 'Create Next App'}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderComponent />
                    <SideBarComponent />
                    <main>
                        {children}
                    </main>
                    <footer>footer</footer>
        </div>
    )
}

export default Layout
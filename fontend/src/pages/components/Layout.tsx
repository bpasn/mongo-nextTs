import Head from "next/head";
import React from "react";
import body from 'next'
import HeaderComponent from "./HeaderComponent";
import SideBarComponent from "./SideBarComponent";
type Props = {
    title: string,
    children?: JSX.Element | JSX.Element[] | string
    | string[]
    | React.ReactChild
    | React.ReactChild[]
    | React.ReactNode
    ;

};
const LayOut: React.FC<Props> = ({
    title,
    children,
}) => (
    <>
        <Head>
            <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
            <meta name="description" content="Ecommerce Website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className="grid-container">
                <HeaderComponent />
                <SideBarComponent />
                <main className="container m-auto mt-4 px-4">{children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner">
                    <p>Copyright © 2022 Amazona</p>
                </footer>
            </div>
    </>
);
export default LayOut
'use client';
import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import SideBarComponent from './components/SideBarComponent';
import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import LoginIcon from '@mui/icons-material/Login';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { SvgIconTypeMap } from '@mui/material';
import LoginScreen from './login/page';
export interface _icon {
  name: string,
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  url?: string,
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const menus: _icon[] = [
    {
      name: 'Dashboard',
      icon: DashboardOutlinedIcon,
      url: '/'

    },
    {
      name: 'Sign In',
      icon: LoginIcon,
      url: '/login'

    }
  ]
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  return (
    <html>
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        {isLogin ? <LoginScreen /> :
          <div className="grid-container">
            <SideBarComponent menus={menus} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <HeaderComponent handleDrawerToggle={handleDrawerToggle} />
            <main>
              {children}
            </main>
            <FooterComponent />
          </div>
        }
      </body>
    </html>
  )
}

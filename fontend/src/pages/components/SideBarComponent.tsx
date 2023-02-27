import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Link from 'next/link';
import { MenuSideBar } from '@/utils/menu.interface';
const drawerWidth = '20rem';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
const menus: MenuSideBar[] = [
    {
        name: "dashboard",
        icon: DashboardOutlinedIcon,
        url: "/"
    },
    {
        name: 'Sign In',
        icon: LoginOutlinedIcon,
        url: '/login'
    }
]
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    mobileOpen?: boolean;
    handleDrawerToggle?: () => void;

}

export default function SideBarComponent(props: Props) {
    const { window } = props;

    const drawer = (
        <Box component={'div'} bgcolor={"#203040"} height={'100%'} >
            <Toolbar />
            <List >
                {menus.map((item: MenuSideBar, index) => (
                    <Link href={item.url ?? '#'}>
                        <ListItem key={index} disablePadding sx={{
                            color: "white"
                        }}>
                            <ListItemButton>
                                <ListItemIcon sx={{
                                    color: 'white'
                                }}>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                ))}
            </List>
            <Divider />
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}>
            </Box>
            <Box
                // component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
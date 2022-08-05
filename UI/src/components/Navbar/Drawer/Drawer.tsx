import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../../Footer/Footer';
type Anchor = 'right';
export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        // top: false,
        // left: false,
        // bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        // sx={{ backgroundColor: "red" }}

        >
            <List>
                {['Home', 'Park', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon sx={{ color: "#fff" }} /> : <MailIcon sx={{ color: "#fff" }} />}
                            </ListItemIcon> */}
                            <ListItemText primary={text} sx={{
                                "& .css-10hburv-MuiTypography-root": {
                                    color: "#fff", fontSize: '1.5rem', fontWeight: 400
                                }
                            }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ?
                                    <InboxIcon sx={{ color: "#fff" }} />
                                    :
                                    <MailIcon sx={{ color: "#fff" }} />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{
                                "& .css-10hburv-MuiTypography-root": {
                                    color: "#fff", fontSize: '1.5rem', fontWeight: 600
                                }
                            }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    return (
        <div>
            {/* {(['right'] as const).map((anchor) => ( */}
            <React.Fragment key={'right'}>
                <Button onClick={toggleDrawer('right', true)}><MenuIcon sx={{ fontSize: '2rem' }} /></Button>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    sx={{
                        "& .css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
                            background: "#72BE44",
                            width: "25%"
                        }
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ flexGrow: '1' }}>{list('right')}</div>

                        <Footer />
                    </div>
                </Drawer>

            </React.Fragment>

        </div >
    );
}

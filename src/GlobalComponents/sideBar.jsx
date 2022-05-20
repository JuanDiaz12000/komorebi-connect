import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import "./Style/sideBar.scss"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
/* const drawerWidth = 180; */

/* interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  /* window?: () => Window;
} */

function SideBar(props){
        const { window } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);
      
        const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
          console.log(mobileOpen);
        };
      
        const drawer = (
          <nav>
            <Toolbar style={{width:'3vw', height:'0vh'}}/>
            <div className="sideBar">
            <div className="accesses">
                <div className="icons">
                    <a href="/video-search">
                    <SearchIcon  sx={{fontSize: 40}}/>
                    <p>Search</p>
                    </a>
                </div>
                <div className="icons">
                    <a href="/aws-connect">
                    <RadioButtonCheckedIcon  sx={{fontSize: 40}}/>
                    <p>Record</p>
                    </a>
                </div>
                <div className="icons">
                    <a href="/user-administration">
                    <PersonIcon  sx={{fontSize: 40}}/>
                    <p>Users</p>
                    </a>
                </div>
                <div className="icons">
                    <a>
                    <LocalOfferIcon  sx={{fontSize: 40}}/>
                    <p>Tags</p>
                    </a>
                </div>
                <div className="icons">
                    <a href="/statistics">
                    <InsightsIcon  sx={{fontSize: 40}}/>
                    <p>Statistics</p>
                    </a>
                </div>
                <div className="icons">
                  <a>
                  <SettingsIcon  sx={{fontSize: 40}}/>
                    <p>Settings</p>
                  </a>
                </div>
                <div className="icons">
                    <a>
                    <HelpIcon  sx={{fontSize: 40}}/>
                      <p>Help</p>
                    </a>
                </div>
            </div>
        </div>
      </nav>
        );
      
        const container =
          window !== undefined ? () => window().document.body : undefined;
      
        return (
            <div>
            <AppBar
              position="fixed"
              zIndex="1000"
              sx={{
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                width: '100vw',
                zIndex: '10000',
                boxShadow: 'none',
                backgroundColor: '#232f3e',
                '@media all': {
                    maxHeight: '7.5vh',
                  },
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' }, alignContent:'center'}}
                >
                  <MenuIcon />
                </IconButton>
                <h2
                style={{
                  width:'25vw'
                }}>
                    Komorebi Connect
                </h2>
                <div className="userInfo">
                <div className="agentIcon">
                <AccountCircleIcon color="#fafafa" sx={{fontSize:40}}/>
                </div>                
                <div className="userTags">
                    <h2>{props.userName}</h2>
                    <p>{props.userType}</p>
                </div>
                </div>
              </Toolbar>
            </AppBar>
            <Box
              component="nav"
              sx={{ /* width: { sm: drawerWidth }, */ flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                style={{
                    height:'100vh',
                    
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: '27vw',
                    backgroundColor:'#232f3e'
                  },
                }}
              >
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    
                    backgroundColor:'#232f3e'
                  },
                }}
                open
              >
                {drawer}
              </Drawer>
              </Box>
              </div>
    )
}


export default SideBar;
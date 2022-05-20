import '../../index.scss'
import './components/Style/statsPage.scss'
import GraphContainer from './components/graphContainer';
import SideBar from '../../GlobalComponents/sideBar';
import { padding } from '@mui/system';

function StatysticsDashBoardPage() {
    return(    
      <div className="centerScreen"
      style={{
          height:'100vh',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignContent:'center'
      }}>
      <SideBar userName= 'Anny Verduzco' userType='Manager'/>
        <div className='centerPart' style={{
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            height:'80vh',
            }}>
            <div className='upperContainer'>
            <GraphContainer typeGraph='first'/>
            <GraphContainer typeGraph='second'/>
            <GraphContainer typeGraph='third'/>
            </div>
            <div className='bottomContainer'>
            <GraphContainer typeGraph='bottom'/>
            </div>
        </div>
      </div>
    );
  }

  export default StatysticsDashBoardPage;

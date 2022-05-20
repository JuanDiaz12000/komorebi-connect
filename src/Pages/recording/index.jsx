import '../../index.scss'
import RecordingScreenDialog from './components/recordingScreen';
import AmazonConnectWindow from './components/amazonConnectWindow';
import SideBar from '../../GlobalComponents/sideBar';

function RecordingSessionPage() {
    return (
        <div className="centerScreen">
          <SideBar userName= 'Anny Verduzco' userType='Manager'/>
          <div className='centerPartR'>
            <AmazonConnectWindow/>
            <RecordingScreenDialog/>
          </div>
        </div>
      )
  }

  export default RecordingSessionPage;

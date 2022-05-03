import '../../index.scss'
import RecordingScreenDialog from './components/recordingScreen';
import AmazonConnectWindow from './components/amazonConnectWindow';
import SideBar from '../../Components/sideBar';

function RecordingSessionPage() {
    return (
        <div className="centerScreen">
          <SideBar/>
          <div className='centerPart' style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
            <AmazonConnectWindow/>
            <RecordingScreenDialog/>
          </div>
        </div>
      )
  }

  export default RecordingSessionPage;

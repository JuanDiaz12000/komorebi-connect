import '../../../index.scss'
import SupervisorInformation from './components/SupervisorInformation'
import SideBar from '../../../GlobalComponents/sideBar'

function SupervisorInformationPage() {
    return (
    <div className='centerScreen'>
        <SideBar userName= 'Anny Verduzco' userType='Manager'/>
        <div className='centerPartR'>
            <SupervisorInformation/>
        </div>
    </div>
    )
  }

export default SupervisorInformationPage;
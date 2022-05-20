import '../../index.scss'
import UserAdminWindow from './components/userAdminWindow'
import SideBar from '../../GlobalComponents/sideBar'

function UserAdminPage() {
return(
    <div className="centerScreen">
        <SideBar userName= 'Anny Verduzco' userType='Manager'/>
        <div className='centerPart'>
          <UserAdminWindow/>
        </div>
      </div>
)
}

export default UserAdminPage;
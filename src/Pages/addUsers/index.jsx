import '../../index.scss'
import UserForm from './components/userForm';
import SideBar from '../../GlobalComponents/sideBar'

function AddUserPage() {
    return (
    <div className='centerScreen'>
        <SideBar userName= 'Anny Verduzco' userType='Manager'/>
        <div className='centerPart'>
            <UserForm/>
        </div>
    </div>
    )
  }

export default AddUserPage;
import SideBar from '../Dashboard/components/SideBar Section/Sidebar'
import Body from './components/Body Section/Body';

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className='dashboardContainer flex'>
        <SideBar />
        <Body/>
      </div>
    </div>
  )
}

export default Dashboard;
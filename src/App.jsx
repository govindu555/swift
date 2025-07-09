import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavbarPage from "./navbarpage/navbar"
import DashboardPage from "./dashboardpage/dashboard"
import ProfilePage from "./profilepage/profile"

const App=()=>{
  return (
    <>
     <div>
       <BrowserRouter>
       <NavbarPage/>
      <Routes>
       <Route path="/" Component={DashboardPage}/>
       <Route path="/profile" Component={ProfilePage}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App;

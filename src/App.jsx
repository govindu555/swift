import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavbarPage from "./navbarpage/navbar"
import DashboardPage from "./dashboardpage/dashboard"
import ProfilePage from "./profilepage/profile"


// this entire code is my own
// this is navigate from one page to another page.
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

import { SignIn } from "./pages/signin"
import { SignUp } from "./pages/signup"
import { Dashboard } from "./pages/dashboard"
import { SendMoney } from "./pages/sendmoney"
import { NavBar } from "./components/navbar"
import { Home } from "./pages/landing"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/send" element={<SendMoney />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

import { SignIn } from "./pages/signin"
import { SignUp } from "./pages/signup"
import { Dashboard } from "./pages/dashboard"
import { SendMoney } from "./pages/sendmoney"
import { NavBar } from "./components/navbar"
import { UserProfile } from "./pages/Profile";
import { Home } from "./pages/landing"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./utils/AuthContext"
import { ProtectedRoute } from "./components/ProtectedRoutes"
import { useAuth } from '@/utils/AuthContext';

function App() {
  // const { loading } = useAuth();

  // if (loading) {
  //   return <div>Loading...</div>; // Or any loading spinner
  // }

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
            <Route path="/send" element={
            <ProtectedRoute>
              <SendMoney />
            </ProtectedRoute>
          }/>
            <Route path="/profile" element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }/>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

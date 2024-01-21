import LoginButton from "./auth/login"
import LogoutButton from "./auth/logout"
import Profile from "./auth/profile"

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <div>
        Profile: <Profile />
      </div>
    </div>
  )
}

export default App

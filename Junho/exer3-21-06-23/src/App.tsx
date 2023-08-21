
import AuthProvider from "./components/AuthProvider";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <AuthProvider>
        <UserProfile/>
    </AuthProvider>
  )
}

export default App;
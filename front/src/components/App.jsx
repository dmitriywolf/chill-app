import { BrowserRouter } from "react-router-dom";
import Navigation from "navigation/Navigation";
import { AuthProvider } from "context/auth/auth.provider";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </BrowserRouter>
  );
}

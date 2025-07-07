import { Outlet } from "react-router-dom";
import Navigation from "./pages/auth/Navigation";
import Footer from "./pages/blog/Footer.jsx";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="px-10 pt-30 flex-grow md:p-30">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;

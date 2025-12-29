import "./App.css";
import { Toaster } from "react-hot-toast";
import GlobalProvider from "./ModelApp/Global/GlobalProvider";
import Ecom from "./ModelApp/Ecom";
function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <GlobalProvider>
        <Ecom />
      </GlobalProvider>
    </>
  );
}

export default App;

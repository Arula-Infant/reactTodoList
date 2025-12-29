import "./App.css";
import { Toaster } from "react-hot-toast";
import RouterOne from "./browse/RouterOne/RouterOne";
import FormOne from "./project/FormOne";
import RouterTwo from "./RouteTwo/RouterTwo";
import GlobalProvider from "./ModelApp/Global/GlobalProvider";
import Ecom from "./ModelApp/Ecom";
// import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
      {/* <GlobalProvider>
        <FormOne />
      </GlobalProvider> */}

      {/* <BrowserRouter>
      <RouterOne />
      </BrowserRouter> */}
      {/* <RouterTwo /> */}

      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <GlobalProvider>
        <Ecom />
      </GlobalProvider>
    </>
  );
}

export default App;

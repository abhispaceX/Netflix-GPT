
import Login from "./components/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import { Provider } from "react-redux";
import Store from "./utils/store";
import Browse from "./components/Browse";




function App() {
   

 
  return (
    <div>
      <Provider store={Store} >
        
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/browse" element={<Browse/>}></Route>
       </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;

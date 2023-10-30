
import Sidebar from "./Sidebar"

import { Routes, Route } from 'react-router';


export default function App() {
  return (
    <h1 className="text-center text-green-500 font-bold   ">

      <Routes>

        <Route index element={<Homepage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/SignUpPage' element={<SignUpPage />} />
      </Routes>




    </h1>
  )
}

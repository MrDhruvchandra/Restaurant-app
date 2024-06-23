import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './component/Home'
 import { Shop } from './component/Shop'
import { Item } from './component/Item'
import Footer from './component/footer'
import { Api } from './component/Api'
function App() {
  const [count, setCount] = useState(0)

  return (
     <div>

<Home   ></Home>
<Shop>  </Shop>
      <Item></Item>
      <Footer/>
{/* <Api/> */}
     </div>
     
  )
}

export default App

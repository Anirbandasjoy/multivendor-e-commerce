import React, { useState } from 'react'
import publicRoutes from './router/routes/PublicRoutes'
import Router from './router/Router';


const App = () => {
  const [allRoutes, setAlRoutes] = useState([...publicRoutes]);
  console.log(allRoutes)

  return <Router allRoutes={allRoutes} />

}

export default App
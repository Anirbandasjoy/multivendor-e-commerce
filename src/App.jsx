import React, { useState } from 'react'
import publicRoutes from './router/routes/PublicRoutes'
import Router from './router/Router';


const App = () => {
  const [allRoutes, setAlRoutes] = useState([...publicRoutes]);
  return <Router allRoutes={allRoutes} />

}

export default App
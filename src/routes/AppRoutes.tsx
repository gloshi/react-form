import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import Form from '../components/Form'


export enum MainPaths {
    main = '/',
    form = '/create'
}

const AppRoutes = () => {
    return (
      <Routes>
          <Route index element={<Home/>}/>
          <Route path={MainPaths.form}  element={<Form />} />
      </Routes>
    )
  }
  
  export default AppRoutes
import axios from './axios'
import { useState } from 'react'
import {Navigate} from 'react-router-dom'

const Protected = ({children}) => {
  const [auth, setAuth] = useState(null)
  axios.get('/store/products/')
  .then(() => setAuth(true))
  .catch(() => setAuth(false))

  if(auth === null) return <div className='loading-div'></div>
  if(auth === false) return <Navigate to='/auth/login/' replace />
  return children
}

export default Protected
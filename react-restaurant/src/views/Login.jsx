import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta';

export default function Login() {

  const emailRef = createRef();
  const passwordRef = createRef();
  const [errores, setErrores] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()

    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    try {
      const { data } = await clienteAxios.post('/api/login', datos)
      console.log(data.token)
    } catch (error) {
      console.log(error)
      setErrores(Object.values(error.response.data.errors))
    }
  }

  return (
    <>
      <h1 className='text-4xl font-black'>Iniciar sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>

        {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}

        <form onSubmit={handleSubmit} noValidate >
          <div className="mb-4">
            <label htmlFor="email" className='text-slate-800'>Email:</label>
            <input type="email" id="email" className='mt-2 w-full p-3 bg-gray-50' name="email" placeholder='Tu Email' ref={emailRef} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className='text-slate-800'>Password:</label>
            <input type="password" id="password" className='mt-2 w-full p-3 bg-gray-50' name="password" placeholder='Tu password' ref={passwordRef} />
          </div>
          <input type="submit" value="Iniciar sesión" className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer' />
        </form>
      </div>
      <nav className='mt-5'>
        <Link to="/auth/registro">¿No tienes cuenta? Crea una.</Link>
      </nav>
    </>
  )
}

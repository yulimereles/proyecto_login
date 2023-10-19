import  {useState} from 'react'
import './Register.css'
import '../../App.css'
import {Link } from 'react-router-dom'
import Axios from "axios";

//import de img/video
import video  from '../LoginImg/4140f6fa067e46f738a3d402b8dbd6de.mp4'
import logo from '../LoginImg/teletrabajo.png'

//import icons
import { MdMarkEmailRead } from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Register = () => {
  
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const createUser = (e)=>{
    e.preventDefault()

    Axios.post('http://localhost:3002/register', {
      Email: email,
      Username: username,
      Password: password
    }).then((res) =>{
      const response = res.json()
      console.log('El usuario ha sido creado ', response)
    })
    .catch((err) => console.error(err))
  }

  return (
    <div className='registerPage flex'>
      <div className='contanier flex'>
     
     <div className='gifDiv'>
      <video src={video} autoPlay muted loop  ></video>

      <div className='textDiv'>
        <h2 className='title'> Create un usuario para poder ver más informacion</h2>
        <p>Alquilar ahora es más facil con MIALQUI</p>
      </div>
      
      <div className='footerDiv flex'>
        <span className='text'>Tengo una cuenta</span>
        <Link to= {'/'}>
          <button className='btn'>Login</button>
        </Link>
      </div>
  </div>
    <div className='formDiv flex'>
       <div className='headerDiv'>
      <img src= {logo} alt="Logo Imagen" />
      <h3>Registrate y explora</h3>
    </div>

    <form action='' className='form grid'>
     

      <div className="inputDiv">
        <label htmlFor='username'>Usuario</label>
        <div className="input flex">
          <MdMarkEmailRead className='icon'/>
          <input type="username" id='username' placeholder='Enter Username' onChange={(event)=>{
           setUserName (event.target.value)
          }}/>
        </div>
      </div>
      <div className="inputDiv">
        <label htmlFor='email'>Email</label>
        <div className="input flex">
          <MdMarkEmailRead className='icon'/>
          <input type="email" id='email' placeholder='Enter Email' onChange={(event)=>{
            setEmail(event.target.value)
          }}/>
        </div>
      </div>
      <div className="inputDiv">
        <label htmlFor='password'>Password</label>
        <div className="input flex">
          <BsFillShieldLockFill className='icon'/>
          <input type="password" id='password' placeholder='Contraseña'onChange={(event)=>{
            setPassword(event.target.value)
          }}/> 
        </div>
      </div>
      <button type='submit' className='btn flex' onClick={createUser}>
        <samp>Registro</samp>
        <AiOutlineSwapRight className='icon'/>
      </button>
      <samp className='forgotPassword'>
        Olvidaste tu contraseña? <a href="">Click Aquí</a>
      </samp>

    </form>
    </div>

      </div>
    </div>
  )
}

export default Register

import PropTypes from 'prop-types'
import { useState } from 'react'
import {validateEmail, validatePassword} from '../utlities/validations'
import { Link } from 'react-router-dom'
import { registerApi } from '../apis/authencation'


const initialStateError = {
    email: '',
    password:'',
    api:'',
}
console.log('registerApi function:', registerApi);
const Authencation = ({pageType}) => {
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    const[errors, setErrors] =useState(initialStateError)

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange =(e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        //alert(email,password)
        e.preventDefault();

        let newErrors = {}

        if (!validateEmail(email)){
            newErrors = {
                ...newErrors,
                email: 'invaild email'
            }
            //error

        }

        if (!validatePassword(password)){
            newErrors = {
                ...newErrors,
                password: 'password should be 6 and more'
            }
            //error
        }

        setErrors(newErrors)

        const hasErrors = Object.values(errors).some(error => error !== '');
        if (hasErrors){
            return 
        }


        if (pageType === PageType.LOGIN){

        }
        else{
            const [result, error]  = await registerApi({
                user:{
                    email: email,
                    password: password
                }
            })
            console.log("result",result)
            console.log("error", error)
        }
    }


    return(
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
                <h3 className="text-xl font-bold ">
                    {/* {alert(pageType)} */}
                    {pageType === PageType.LOGIN ? 'Login' : 'Register'}
                </h3> 

                {(pageType === PageType.LOGIN) ? 
                    <p>Not a user ?
                        <Link 
                        to='/register'
                        className='underline '
                        >Register
                        </Link>
                    </p>
                    :
                    <p>Already a user ?
                        <Link 
                        to='/login'
                        className='underline '
                        >Login
                        </Link>
                    </p>
                    }



                <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-96 '>
                    <input 
                    name = "email"
                    type='email'
                    className='  mt-2 h-12 py -2 border border-gray-600 rounded px-3 '
                    placeholder='Enter Email'
                    value ={email}
                    onChange={handleEmailChange}
                    />
                    { errors.email && <p className='text-sm text-red-500 '>{errors.email}</p>}

                    <input 
                    name = "password"
                    type='password'
                    className='  mt-2 h-12 py -2 border border-gray-600 rounded px-3'
                    placeholder='Enter Password'
                    value ={password}
                    onChange={handlePasswordChange}
                    />
                     { errors.password && <p className='text-sm text-red-500 '>{errors.password}</p>}

                     <button
                        type='submit'
                        className='h-12 bg-indigo-500 hover:bg-indigo-600 rounded text-white py-2'>
                        {pageType === PageType.LOGIN ? 'Login' : 'Register'}
                    </button>
                </form>
                
            </div>
        </div>
    )
}

export const PageType = Object.freeze({
    LOGIN : 0,
    REGISTER : 1
})

Authencation.proptypes ={
    pageType: PropTypes.number.isRequired
}

export default Authencation
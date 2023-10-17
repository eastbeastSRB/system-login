import { AxiosError } from 'axios';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

function SignUp() {
    // const [users, setUsers] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const navigate = useNavigate();


    const handleSubmit = (event: any) => {
        console.log({ firstName, lastName, email, password })
        event.preventDefault();
        axios
        .post('/users/v1', { firstName, lastName, email, password, confirmedPassword })
        .then(() => {
            alert('Registration Successful')
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setConfirmedPassword('')
            navigate('/login')
        })
        .catch((error: AxiosError) => {
            console.log('Unable to register user', error)
        })

    }
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
            <form className='text-center border rounded-lg w-[600px] h-[400px] p-9'
            onSubmit={handleSubmit}>
                {/*FirstName Input */}
                <label>First name</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='text'
                placeholder='first name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <br />
                {/*LastName Input */}
                <label>Last name</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='text'
                placeholder='last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
                <br />
                <br />
                {/* Email Input */}
                <label>Email</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                {/* Password Input */}
                <label>Password</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <label>Confirm Password</label>
                <br />
                <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                type='password'
                placeholder='Confirm Password'
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)} />
                <br />
                <br />
                {/* Button */}
                <button className='w-[200px] h-[50px] border hover:bg-teal-900'
                type='submit'>Sign Up</button>
            </form>
        </div>
        <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
            <h2 className='text-3xl text-white'>Sign Up</h2>
        </div>
    </div>
  );
}

export default SignUp;

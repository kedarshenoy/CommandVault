// import React from 'react'
// import Lottie from 'lottie-react';
// import Loginlogo from '../../Assets/Login.json';
// import { useState } from 'react';
// import '../../styles/Login.css';
// export default function Login() {
//     const [isToggled, setIsToggled] = useState(false);

//     // Function to handle the toggle
//     const handleToggle = () => {
//         setIsToggled(prevState => !prevState);
//     };
//     return (
//         <div className='MainLogin'>
//             <div className='loginBox'>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div className={`toggle-container ${isToggled ? 'is-toggled' : ''}`} onClick={handleToggle}>
//                         <div className="toggle-background"></div>
//                         <div className={`toggle-option ${!isToggled ? 'selected' : ''}`}>Sign UP</div>
//                         <div className={`toggle-option ${isToggled ? 'selected' : ''}`}>Login</div>
//                     </div>
//                 </div>
//                 {
//                     isToggled ?
//                     <div style={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>
//                 <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                 <div style={{width:'50vh'}}>
//                     <input className='inputBox' type='text' placeholder='Name' />
//                     <input className='inputBox' type='email' placeholder='Email' />
//                     <input className='inputBox' type='password' placeholder='Password' required/>
//                     <input className='inputBox' type='password' placeholder='Confirm Password' required/>
//                     <div style={{color:'blue', padding:'10px', border:'1px solid blue', display:'inline-block', borderRadius:'20px', cursor:'pointer'}}>Submit</div>
//                 </div>
//                 </div>

//                 :
//                 <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                 <div style={{ width: '50vh' }}>
//                     <input className='inputBox' type='text' placeholder='Name' />
//                     <input className='inputBox' type='email' placeholder='Email' />
//                     <input className='inputBox' type='password' placeholder='Password' required />
//                     <input className='inputBox' type='password' placeholder='Confirm Password' required />
//                     <div style={{ color: 'blue', padding: '10px', border: '1px solid blue', display: 'inline-block', borderRadius: '20px', cursor: 'pointer' }}>Submit</div>
//                 </div>
//                 <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />

//             </div>
//                 }
                
               
//             </div>
//         </div>
//     )
// }


// import React from 'react';
// import Lottie from 'lottie-react';
// import Loginlogo from '../../Assets/Login.json';
// import { useState } from 'react';
// import '../../styles/Login.css';

// export default function Login() {
//     const [isToggled, setIsToggled] = useState(false);

//     // Function to handle the toggle
//     const handleToggle = () => {
//         setIsToggled(prevState => !prevState);
//     };

//     return (
//         <div className='MainLogin'>
//             <div className='loginBox'>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <div className={`toggle-container ${isToggled ? 'is-toggled' : ''}`} onClick={handleToggle}>
//                         <div className="toggle-background"></div>
//                         <div className={`toggle-option ${!isToggled ? 'selected' : ''}`}>Sign UP</div>
//                         <div className={`toggle-option ${isToggled ? 'selected' : ''}`}>Login</div>
//                     </div>
//                 </div>
//                 <div className={`form-container ${!isToggled ? 'active' : ''}`}>
//                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                         <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                         <div style={{ width: '50vh' }}>
//                             <input className='inputBox' type='text' placeholder='Name' />
//                             <input className='inputBox' type='email' placeholder='Email' />
//                             <input className='inputBox' type='password' placeholder='Password' required />
//                             <input className='inputBox' type='password' placeholder='Confirm Password' required />
//                             <div style={{ color: 'blue', padding: '10px', border: '1px solid blue', display: 'inline-block', borderRadius: '20px', cursor: 'pointer' }}>Submit</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={`form-container ${isToggled ? 'active' : ''}`}>
//                     <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                         <div style={{ width: '50vh' }}>
//                             <input className='inputBox' type='text' placeholder='Name' />
//                             <input className='inputBox' type='email' placeholder='Email' />
//                             <input className='inputBox' type='password' placeholder='Password' required />
//                             <input className='inputBox' type='password' placeholder='Confirm Password' required />
//                             <div style={{ color: 'blue', padding: '10px', border: '1px solid blue', display: 'inline-block', borderRadius: '20px', cursor: 'pointer' }}>Submit</div>
//                         </div>
//                         <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React from 'react';
import Lottie from 'lottie-react';
import Loginlogo from '../../Assets/Login.json';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../../styles/Login.css';
import alertIcon from '../../Assets/icons/alerticon.svg';
import axios from 'axios';
export default function Login() {
    const [isToggled, setIsToggled] = useState(false);
    const [name,setName] =useState();
    const [email,setMail] =useState();
    const [Password,setPassword] =useState();
    const [confirmPass,setconfirmPass] =useState();
const [error,setError] =useState();

const navigate = useNavigate();
    const handleToggle = () => {
        setError();
        setIsToggled(prevState => !prevState);
    };

    const handleSignup =()=>{
        setError();
        if(!name||!email||!Password||!confirmPass){
           return setError('Everything is Required')
        }
        if(Password !== confirmPass){
            return setError('Password does not match');
        }
        const values ={
            name:name,
            email:email,
            Password:Password,
            confirmPass:confirmPass
        }
        axios({
            method:'POST',
            url:'http://localhost:5000/signup',
            data:values,

        }).then(res=> navigate('/post')).catch(err=>{ if (err.response) {
            setError(err.response.data); 
        } else {
            setError("Something went wrong");
        }})
    }

    const handleLogin =()=>{
        setError();

        if(!email||!Password){
            return setError('Everything is Required')
         }
         const values ={
            email:email,
            Password:Password,
        }
        axios({
            method:'POST',
            url:'http://localhost:5000/login',
            data:values,

        }).then(res=> {localStorage.setItem("Token",res.data.Token);navigate('/post')}).catch(err=>{ if (err.response) {
            setError(err.response.data); 
        } else {
            setError("Something went wrong");
        }})
    }

    return (
        <div className='MainLogin'>
            <div className='loginBox'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={`toggle-container ${isToggled ? 'is-toggled' : ''}`} onClick={handleToggle}>
                        <div className="toggle-background"></div>
                        <div className={`toggle-option ${!isToggled ? 'selected' : ''}`}>Sign UP</div>
                        <div className={`toggle-option ${isToggled ? 'selected' : ''}`} >Login</div>
                    </div>
                </div>
                {!isToggled ? (
                    <div className="form-container active">
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
                            <div style={{ width: '50vh' }}>
                                {error ? <div className='errorbox' style={{}}><img src={alertIcon} alt='' className='errorMessageicon'/>{error}</div> : null}
                                <input className='inputBox' type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                                <input className='inputBox' type='email' placeholder='Email' value={email} onChange={(e)=>setMail(e.target.value)}/>
                                <input className='inputBox' type='password' placeholder='Password' required value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                                <input className='inputBox' type='password' placeholder='Confirm Password' required value={confirmPass} onChange={(e)=>setconfirmPass(e.target.value)}/>
                                <div className='loginSubmit' onClick={()=>handleSignup()} >SignUp</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="form-container active">
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <div style={{ width: '50vh' }}>
                                {/* <input className='inputBox' type='text' placeholder='Name' /> */}
                                {error ? <div className='errorbox' style={{}}><img src={alertIcon} alt='' className='errorMessageicon'/>{error}</div> : null}

                                <input className='inputBox' type='email' placeholder='Email' value={email} onChange={(e)=>setMail(e.target.value)}/>
                                <input className='inputBox' type='password' placeholder='Password' required value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                                {/* <input className='inputBox' type='password' placeholder='Confirm Password' required /> */}
                                <div  className='loginSubmit'onClick={()=>handleLogin()}>Login</div>
                            </div>
                            <Lottie animationData={Loginlogo} loop={false} style={{ height: '50vh', width: '50vh' }} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

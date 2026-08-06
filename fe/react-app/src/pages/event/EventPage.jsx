import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api/axios';
//////////////////////////////////////////////////
import { useNavigate } from 'react-router-dom';

// npm install react-bootstrap bootstrap
const EventPage = () => {
/*
변수?
- scope : 전역, 지역
- state
const data = {
    id : 'shlee', password : 'shlee'
}

// 상태관리 안되는 변수 사용
let id = data.id ;
let password = data.password;

// 상태관리
const [id, setId] = useState();
const [password, setPassword] = useState();
setId(data.id), setPassword(data.password);


*/
    // 사용자의 입력값과 스크립트 변수 동기화를 위한 상태관리
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');

    // Handler 쓸 때
    // const emailHandler = (e) => {
    //     setEmail(e.target.value);
    // }

    // const passwordHandler = (e) => {
    //     setPswd(e.target.value);
    // }

    // transition 위한 HOOK
    const moveUrl = useNavigate();

    const signInHandler = async (e, email, pswd) => {
       e.preventDefault();

        await api.get(`/users?email=${email}&pswd=${pswd}`)
        .then(response => {
            console.log(`debug >>>> response :`, response);
            const ary = response.data;
            if (ary.length > 0) {
                // 인증된 사용자 정보 관리
                // sessionStorage, localStorage
                // 인증 - 신원 확인, 인가 - 특정 url 접근할 수 있는 권한
                // Json Web Token(JWT) - token (header)
                // response.headers.get('Aurthorizataion');
                // localStorage.setItem('token', 'token-xxxxxx');
                // react component transition
                
                const user = ary[0];
                localStorage.setItem('userName', user.name); // 로그인한 유저 이름을 로컬스토리지에 저장
                moveUrl('/success' , {  // state 방식
                    state : {
                        user,
                        from : '/signIn'
                    }
                });
            } else {
                moveUrl('/error?category=react&sort=latest'); // queryString 방식으로 전달
            }
        })

        .catch(err => {
            console.log(`debug >>>> error :`, err);
        });
    }


    useEffect(() => {
        console.log(`debug >>>> emailHandler email :`, email);
        console.log(`debug >>>> pswdHandler pswd :`, pswd);
    })


    return(
        <div className='container'>
            <div class="mb-3 mt-3">
                <label  for="email" class="form-label">Email:</label>
                <input  type="email" 
                        class="form-control" 
                        id="email" 
                        placeholder="Enter email" 
                        name="email" 
                        value={email}
                        onChange={ (e) => {
                            setEmail(e.target.value)
                        }}
                        // onChange={ (e) => emailHandler(e)} Handler 쓸 때는 이런 식
                        />
            </div>
            <div class="mb-3">
                <label  for="pwd" class="form-label">Password:</label>
                <input  type="password" 
                        class="form-control" 
                        id="pwd" 
                        placeholder="Enter password" 
                        name="pswd" 
                        value={pswd}
                        onChange={ (e) => {
                            setPswd(e.target.value)
                        }}
                        // onChange={ (e) => passwordHandler(e)} Handler 쓸 때는 이런 식
                        />
            </div>
            <div class="form-check mb-3">
                <label  class="form-check-label">
                <input  class="form-check-input" 
                        type="checkbox" 
                        name="remember" /> Remember me
                </label>
            </div>   

            
        {/* 버튼으로 제출 -> 전달 받음 */}
        <Button variant='primary'
            onClick={ (e) => signInHandler(e, email, pswd) }>SignIn</Button> 
        </div>   
    )
};

export default EventPage;


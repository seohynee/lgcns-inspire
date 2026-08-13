// 로그인

import { useState } from 'react';
import styled  from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import api from '../../../api/axios';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 60px 20px;
`;

const FormWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 32px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h2`
    margin: 0 0 24px;
    text-align: center;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 12px;
    margin-bottom: 16px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #6c5ce7;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 12px 16px;
    margin-top: 8px;
    font-size: 16px;
    color: #fff;
    background: #6c5ce7;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:disabled {
        background: #b2a8f0;
        cursor: not-allowed;
    }
`;

const TextLink = styled(Link)`
    display: block;
    margin-top: 16px;
    text-align: center;
    font-size: 14px;
    color: #6c5ce7;
`;

const SignInPage = () => {
    // state
    const [form, setForm] = useState({
        email : '', password :  ''
    });
    const moveUrl = useNavigate();

    // 기존값을 유지하면서 현재 입력된 필드에 대한 상태 변화(업데이트)를 처리
    const keyHandler = (e) => {
            const {name, value} = e.target;
            setForm({...form, [name]:value});
        };
    
        /*
        CRUD
        - axios : get(), post(), put() | patch(), delete();
        QueryString(url 뒤에 직접 바인딩) -> router에서 사용 가능 확인
        - api.get(`url?email=xxxx&password=xxxxx`);
        - api.get(`url`, {
            params : {...form}
        })

        DB : SQL(Structor Query Language)
        select name, email, password
        from table
        where email = ? and password = ?

        */
    
        
    const signInHandler = async (e) => {
        e.preventDefault();

        // json-server version
                await api.get(`/users?email=${form.email}&password=${form.password}`)
                .then( response => {
                    console.log(`debug >>>> axios request success :`, response);
                    if (response.status === 200) {

                        localStorage.setItem('user', response.data[0].email);
                        // 추후 추가 작업
                        // header access token 가져오고 싶을 수 있어야함
                        // 인증, 인가 -> JWT or spring security

                        moveUrl(`/blogs/index`);
                    }
                })
                .catch( error => {
                    console.log(`debug >>>> axios request error :`, error);
                })
    }

    return (
        <Container>
            <FormWrapper>
                <Title>Sign In</Title>
                <form onSubmit={signInHandler}>
                    <Input  type='email' 
                            name='email'
                            placeholder="이메일 입력하세요"
                            value={form.email}
                            onChange={keyHandler}/>
                    <Input  type='password' 
                            name='password'
                            placeholder="패스워드 입력하세요"
                            value={form.password}
                            onChange={keyHandler}/>
                    <Button type='submit'>Sign In</Button>
                </form>
                <TextLink to='/'>회원가입</TextLink>
            </FormWrapper>
        </Container>
    );
};

export default SignInPage;

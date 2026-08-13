// 회원가입
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

const SignUpPage = () => {
    const [form, setForm] = useState({
        name : '',
        email : '',
        password : ''
    });

    // 기존값을 유지하면서 현재 입력된 필드에 대한 상태 변화(업데이트)를 처리
    const keyHandler = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    };


    const moveUrl = useNavigate();

    const signUpHandler = async (e) => {
        e.preventDefault();

        console.log(`debug >>>> SignUpPage signUpHandler event`);
        const data = {...form};
        // const data = {
        //     name : form.name,
        //     email : form.email,
        //     password : form.password
        // } 로도 가능   
        


        /* Q)
        - npx json-server --watch db.json --port 5001
        - axios 통신을 통해서 json-server 데이터를 전달하고 저장
        - 가입 성공 시(200) - SignInPage 이동
        - 가입 실패 시(4xx) - 
        */

        // json-server version
        await api.post(`/users`, data)
        .then( response => {
            console.log(`debug >>>> axios request success :`, response);
            if (response.status === 201) {
                moveUrl(`/users/signIn`);
            }
        })
        .catch( error => {
            console.log(`debug >>>> axios request error :`, error);
        })

    ;}

    return (
        <Container>
            <FormWrapper>
                <Title>회원가입</Title>
                <form onSubmit={signUpHandler}>
                    <Input  type='text' 
                            name='name'
                            placeholder="이름 입력하세요"
                            value={form.name}
                            onChange={keyHandler}/>
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
                    <Button type='submit'>가입하기</Button>
                </form>
                <TextLink to='/users/signIn'>이미 회원이시면 로그인</TextLink>
            </FormWrapper>
        </Container>
    );
};

export default SignUpPage;

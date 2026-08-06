// 로그인

import styled  from 'styled-components';
import { Link } from "react-router-dom";

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
    return (
        <Container>
            <FormWrapper>
                <Title>로그인</Title>
                <form>
                    <Input  type='text' 
                            name='name'
                            placeholder="이름 입력하세요"/>
                    <Input  type='email' 
                            name='email'
                            placeholder="이메일 입력하세요"/>
                    <Input  type='password' 
                            name='password'
                            placeholder="패스워드 입력하세요"/>
                    <Button type='submit'>가입하기</Button>
                </form>
                <TextLink to='#'>이미 회원이시면 로그인</TextLink>
            </FormWrapper>
        </Container>
    );
};

export default SignInPage;

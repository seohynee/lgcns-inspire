
// npm install styled-components 
import styled from "styled-components";

const StyledButton = styled.button`
    padding : 8px 16px ; 
    font-size : 16px ;
    border-radius : 8px ;
    cursor : pointer 
`;


const Button = (props) => {
    return(
        <StyledButton onClick={props.onClick}
        disabled={props.disabled}>{props.title}</StyledButton>
    );
}


// // 위의 코드를 구조분해를 이용해 이렇게도 작성 가능
// const Button = (onClick, title, disabled) => {
//     return(
//         <StyledButton onClick={onClick}
//         disabled={disabled}>{title}</StyledButton>
//     );
// }


export default Button ;


import { useState } from "react";
import Greeting from "../../components/rendering/Greeting";
import LoginButton from "../../components/rendering/LoginButton";
import LogoutButton from "../../components/rendering/LogoutButton";

const RenderingPage =  () => {
    // script
    const [flag, setFlag] = useState(false); // 기본 시작은 false (logout 상태)


    // ui
    return (
        <div>
            <Greeting flag={flag}/>
            {
                flag ? 
                    <LogoutButton isLogout={setFlag}/> // function 전달되는 형태
                :
                    <LoginButton isLogin={setFlag}/>
            }
        </div>
    );
}

export default RenderingPage;

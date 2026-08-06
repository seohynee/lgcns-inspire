import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = (props) => {
    return props.flag ? <UserGreeting/> : <GuestGreeting/> // 컴포넌트 return 도 가능
}

export default Greeting;
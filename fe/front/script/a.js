
let total = 100;

const getTotal = () => {
    return total;
};


export default getTotal; // 외부에서 쓸 수 있도록
// 한 함수 당 하나의 export default만 가능하다.



// 여러 개를 할 때는 함수 앞에 export를 붙여주면 된다.
export const a = () => {
    return "a";
}

export const b = () => {
    return "b";
}
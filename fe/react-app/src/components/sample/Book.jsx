// 실제 화면 랜더링
import '../../styles/book.css';
import placeholder from '../../img/placeholder.png';


const Book = ({bookName, price}) => {
    return(
        <div className='wrapper'>
            <div>
                <img    src={placeholder}
                        className='image'></img>
            </div>

            <div>
                <span>책 이름 : {bookName} </span><p/>
                <span>책 가격 : {price} </span>
            </div>
        </div>
    );
}

export default Book;
import Book from "../../components/sample/Book";

const LibraryPage = () => {
    /*
    jsx = script + html
    */
    // Script
    const books = [
        {category : 'it',    bookName :'java',  price : '10,000원'},
        {category : 'it',    bookName :'java',  price : '10,000원'},
        {category : 'lang',  bookName :'kor',   price : '10,000원'},
        {category : 'lang',  bookName :'eng',   price : '10,000원'},
        {category : 'essay', bookName :'xxxx',  price : '10,000원'},
        {category : 'essay', bookName :'xxxx',  price : '10,000원'},
    ];

    // UI Template
    // html에서 스크립트 변수를 {}를 이용해서 자유롭게 사용 가능
    return(
        <div>
            {
                books.filter(book => book.category === 'lang')
                .map((book,idx) => {
                    return <Book    key={idx}
                                    bookName={book.bookName}
                                    price={book.price}
                                    book={book}/> // Book 컴포넌트 호출
                })
            }

        </div>
    );

   
}

export default LibraryPage;
import { useLocation } from "react-router-dom";


const Product = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div className="container">
            <h1>{location.state.book.bookName}</h1>
        </div>
    );
}


export default Product;
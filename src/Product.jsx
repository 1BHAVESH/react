import "./Product.css";
import Price from "./Price";
import Description from "./Description";

function Product({title, idx, description, demo}){

    
    // console.log(props.description);

    let oldPrice  = ["1000", "2000", "3000", "4000"];
    let newPrice = ["800", "1500", "2800", "3500"];

   
    
    
    return(
        <div className="product">
            
        <p>{title}</p>
        <p>{demo}</p>
       <p>{description}</p> 
        <Price oldPrice = {oldPrice[idx]}  newPrice = {newPrice[idx]}/>
       
        </div>
    )
}

export default Product;
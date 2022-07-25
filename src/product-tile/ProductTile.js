import './ProductTile.css';

 const ProductTile = (props) => {
    return (
        <div className="product-tile">
          <img className="product-image" src={props.img} alt="Burger" />
          <h2 className='product-name'> {props.name} </h2>
          <button type="submit" className="btn-add">add to Cart</button>
        </div>
    )
}

export default ProductTile;
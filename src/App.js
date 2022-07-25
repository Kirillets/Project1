import './App.css';
import ProductTile from './product-tile/ProductTile';

const products = [
  {
    img: 'https://picsum.photos/100/300',
    name: 'Very Very Tasty burger!!!',
  },
  {
    name: 'Big Mac',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdVWbcJTgxBrcyAu2GA_nMpe7OcmDuSJ2rhdS76jRe5M_U5nJoEtS5cec_jVNrVLEwR4&usqp=CAU'
  }
]

function App() {
  return <div className='products'>
    {products.map(p => <ProductTile name={p.name} img={p.img}></ProductTile>)}
  </div>
}

export default App;

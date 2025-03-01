

import { useEffect, useState } from 'react';
import SearchBar from './components/tpGrafikart/SearchBar';
import ProductTable from './components/tpGrafikart/ProductTable';
import ProductRow from './components/tpGrafikart/ProductRow';
import ProductCatRow from './components/tpGrafikart/ProductCatRow';
// import SearchBar from './components/tpReact/SearchBar';
// import ProductTable from './components/tpReact/ProductTable';

const App = () => {

  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];


  const [showStocked, setShowStocked] = useState(true)
  const [search, setSearch] = useState('')

  const productsVisible = products.filter((row) => {
    if (!row.stocked && showStocked) {
      return false
    }
    if (search.toLowerCase() && !row.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    return true
  })

  let lastCategory = []
  let row = []
  for (const product of productsVisible) {
    if (lastCategory !== product.category) {
      row.push(<ProductCatRow key={`id-${product.category}`} row={product.category} />)
    }
    row.push(<ProductRow key={`id-${product.name}`} row={product} />)

    lastCategory = product.category
  }

  return (
    <>
      <SearchBar
        showStocked={showStocked}
        setShowStocked={setShowStocked}
        setSearch={setSearch}
      />
      <ProductTable row={row} />

    </>


  );
};

export default App;


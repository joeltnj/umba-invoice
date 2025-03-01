

import { useEffect, useState } from 'react';
import SearchBar from './components/tpReact/SearchBar';
import ProductTable from './components/tpReact/ProductTable';

const App = () => {

  const [showCheckBox,setShowCheckBox]=useState(false)


  // useEffect(() => {
  //   document.title = count
  // }, [count])




  return (
    <>


      <SearchBar
       onShowCheckBoxApp={showCheckBox}
       onSetShowCheckBoxApp={setShowCheckBox}/>
      <ProductTable />
    </>


  );
};

export default App;


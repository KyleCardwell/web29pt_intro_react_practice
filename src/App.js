import React , { useState } from 'react'
import Footer from './components/Footer';
import Header from "./components/Header"
import Main from "./components/Main";

function App() {

  const [data, setData] = useState({
    name: "Kyle",
    location: "Utah"
  })

  // const dataContent = data[0]
  // const dataSetter = data[1]

  // console.log(dataContent, dataSetter);

  return (
    <>
      <Header />
      <Main name={ data.name } location={data.location} />
      <Footer />
    </>
  );
}

export default App;

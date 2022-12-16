import { useEffect, useState } from "react";
import { Card } from "./components/Card";

function App() {

  const [data, setData] = useState({
  isloading:true,
  data:[],
  isError:false,
  })

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => {
        setData({
          isloading: false,
          data: data.results,
          isError: false,
        })
     })
    .catch(err => {
      setData({
        isloading: false,
        data:[],
        isError: true,
        })
     })
  },[])

  return (
    <div className="app container">
        <h1 className="text-center fw-bold display-1 mb-3">Rick and Morty</h1>
        {data.isloading && <h1>Loading...</h1>}
        {data.isError && <h1>Error...</h1>}
        {data.data !== 0 && ( 
          <ul className="row list-unstyled justify-content-center">
            {
            // console.log(data.data)
            data.data.map(item => 
            <Card key={item.id} 
            img={item.image} 
            name={item.name}
            status={item.status}
            gender={item.gender}
            time={item.created} />
            )
            }
          </ul>    
          ) }
    </div>
  );
}

export default App;

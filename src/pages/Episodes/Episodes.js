import React, { useEffect, useState } from 'react'
import { Card } from '../../components/Card';
// import { Pagination } from '../../components/Pagination';

export const Episodes = () => {
  const [data, setData] = useState([]);
  const {info, results} = data;
  // const [activePage, setActivePage] = useState(1);
  //   const [status, setStatus] = useState("");
  //   const [search, setSearch] = useState("");
  //   const [gender, setGender] = useState("");
  //   console.log(results);
  //   // console.log(info.pages);
   
    let apiEpisode =`https://rickandmortyapi.com/api/episode`


    useEffect (() => {
        fetch(apiEpisode)
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
        setData(data)
        })
    },[apiEpisode])

    // console.log(info,results);


  return (
    <>
    <div className="container">
        <h2 className='text-center mb-3 fs-3 mt-3'>Episodes</h2>
        <div className="row">
            <div className="col-3">
               <h3>Filter</h3>
                
             </div>
            <div className="col-9">

            {results !== 0 && ( 
            <ul className="row list-unstyled justify-content-around gap-4">
              {    
                  results?.map(item => (
                    <li key={item.d} className="col-3 p-5 bg-white shadow mb-5">
                          <p>{item.name}</p>
                          <p>{item.air_date}</p>
                         
                    </li>
                    ) )
                         
                  
              }
            </ul>    
          
          ) }

            </div>
        </div>
        {/* <Pagination totalpage={info?.pages}
        setActivePage={setActivePage}
        activePage={activePage} /> */}
    </div>
    </>
  )
}

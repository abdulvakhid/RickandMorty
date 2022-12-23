import React, { useEffect, useState } from 'react'
import { Card } from '../../components/Card';
import { Filter } from '../../components/Filter'
import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search'

export const Character = () => {
    const [activePage, setActivePage] = useState(1);
    const [datas, setDatas] = useState([]);
    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState("");
    const {info, results} = datas;
    console.log(results);
    // console.log(info.pages);
    let api =`https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}&status=${status}&gender=${gender}`


    useEffect (() => {
        fetch(api)
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            setDatas(data)
        })
    },[api])

    // console.log(info,results);


  return (
    <>
    <div className="container">
        <h2 className='text-center mb-3 fs-3 mt-3'>Characters</h2>
        <Search setSearch={setSearch} setActivePage={setActivePage}/>
        <div className="row">
            <div className="col-3">
               <h3>Filter</h3>
                <Filter setGender={setGender} setStatus={setStatus}/>
             </div>
            <div className="col-9">

            {results !== 0 && ( 
          <ul className="row list-unstyled justify-content-between">
            {    
                results?.map(item => 
                <Card key={item.id} 
                id={item.id}
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
        </div>
        <Pagination totalpage={info?.pages}
        setActivePage={setActivePage}
        activePage={activePage} />
    </div>
    </>
  )
}

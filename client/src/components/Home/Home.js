
import React, { useState, useEffect } from 'react';
import BarChart from '../Chart/Chart'
import Dropdown from 'react-dropdown';
import Card from '../UI/Card'
import classes from './Home.module.css';

const Home = (props)=>{
    const [data,setData]=useState();
    const [options,setOptions]=useState();
    const [inputCoins,setInputCoins]=useState([]);
    const [isRendered,setRendered]=useState(true);
    function changeFirst(e){
        if(inputCoins.includes(e.value)){
            alert(`Already chosen ${e.value}`);
            return;
        }
        if(inputCoins.length>7)
        {
            alert(`You can select only upto 8 coins in one comparisions`);
            return;
        }
        let arr=[...inputCoins,e.value];
        setInputCoins(arr);
    }
    async function findData(){
        if(inputCoins.length<2)
        {
            alert('Compare atleast 2 coins');
            return;
        }
        let url=`https://min-api.cryptocompare.com/data/pricemulti?fsyms=`;
        for(let coin of inputCoins)
        {
            url+=coin+',';
        }
        url+="&tsyms=USD,EUR";
        setRendered(false);
        const response =await fetch(url);
        const responseData=await response.json();
        setData(responseData);
        setRendered(true);
        const pushResponse=await fetch("/compareData",{
            method: "POST",
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify({
                coins:inputCoins,
                data:responseData    
            })
        });
    } 
    function deleteCoin(coin_name){
        let arr=[...inputCoins];
        arr=arr.filter(coin=>coin!==coin_name);
        setInputCoins(arr);
    }
    // Fetching 100 coins from coinmarketcap.com API
    let allOptions;
    async function fetchCurrencies(){
        let data=await fetch(`/fetchCoins`);
        data=await data.json();
        const allCoins = data.data.coins.data;
        allOptions=allCoins.map(coin=>{
            return coin.symbol;
        });
        allOptions.sort()
        setOptions(allOptions);
    }
    let inputData=inputCoins.map(coin=>{
        return <div className={classes.card} onClick={deleteCoin.bind(this,coin)}><li>{coin}</li></div>
    })

    useEffect(()=>{
       fetchCurrencies();
    },[])
    const style={
        minHeight:"100vh"
    }
    return (
        <React.Fragment>    
            <div style={style}>
            <Card card="card">
                <h4>You can select upto 8 crypto coins</h4>
                <div className={classes.dropdown}>
                    <Dropdown clasName={classes.drop} options={options} onChange={changeFirst} placeholder="Select crypto coins" />
                 </div>
                 <ul>
                     {inputData}
                 </ul>
                
                <div>
                    <button onClick={findData}>Compare</button>
                </div>
            </Card>
            
            
            {isRendered?<BarChart data={data}/>:<h2 className={classes.loading}>"Loading... Please wait"</h2>}
            </div>
            
        </React.Fragment>
    );
        

}

export default Home;
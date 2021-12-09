
import classes from './History.module.css';
import React,{useEffect, useState} from 'react';
import Card from '../UI/Card';
import Chart from '../Chart/Chart';
 const History = (props)=>{

    let data;
    const [historyData,sethistoryData] = useState();
    const [isRendered,setRendered]=useState(false);
    async function findHistory(){
        setRendered(false);
        data=await fetch("/getHistory");
        data = await data.json();
        setRendered(true);
        let historyDataComplete=data.data.history.map((history)=>{
            let date=new Date(history.createdAt);
            date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ", " + date.toDateString();
            const historyNames=history.coins.map(name=>{
                return <span>{name} | </span>
            })   
            return( 
                    <Card>
                        <li key={history._id}>
                            <div>
                                | {historyNames}
                            </div>
                            <div>
                                <span>{date}</span>
                            </div>
                        </li>
                        <Chart data={history.data}/>
                    </Card>
            )
        });
        sethistoryData(historyDataComplete);
    }
    useEffect(()=>{
        findHistory();
    },[])

    const style={
        minHeight:"80vh"
    }
    return (
        <React.Fragment>
            <h1 className={classes.heading}>All Comparision History</h1>
            <div className={classes.listdiv}>
                {
                    isRendered?<ul className={classes.list}>
                        {historyData}
                    </ul>:<h1 style={style}>Loading..... Please wait</h1>
                }
            </div>
        </React.Fragment>
    );
}

export default History;
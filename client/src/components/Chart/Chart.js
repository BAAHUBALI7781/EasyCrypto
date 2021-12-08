import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import classes from './Chart.module.css'

const BarChart=(props) => {

    
    if(props.data)
    {
        const dataObj=props.data;
        const lab=Object.keys(dataObj);
        let dataset=[];
        for(let i of lab){
            console.log();
            dataset=[...dataset,dataObj[i].USD];
        }
        console.log(dataset);
        return (
            
                <div className={classes.barChart}>
                <Bar data={{
                    labels:lab,
                    datasets: [{
                        label: 'Crypto Compare (all data in USD)',
                        data: dataset,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(170, 190, 255, 0.2)',
                            'rgba(40, 130, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(170, 190, 255, 0.2)',
                            'rgba(40, 130, 255, 0.2)'
                        ],
                        borderWidth: 1,
                        
                        }]
                    }} 
                    width={600} 
                    height={400}
                    options={
                        {maintainAspectRatio: false}
                    } 
                />
                
            </div>
                
        );
    }
    else
    {
        return (
            <h1>Select currencies to see graph!</h1>
        );
    }
}
export default BarChart;
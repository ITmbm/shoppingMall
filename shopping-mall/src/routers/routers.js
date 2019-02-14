import React from 'react';
import {Route} from 'react-router-dom';
import Index from '../components/index';
import Classify from '../components/classify';
import Car from '../components/car';
import Mine from '../components/mine';
import List from '../components/list';
import Detail from '../components/detail';
let routers = [
    {
        path:'/',
        component:Index
    },
    {
        path:'/classify',
        component:Classify
    },
    {
        path:'/car',
        component:Car
    }, 
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/list',
        component:List
    },
    {
        path:'/detail',
        component:Detail
    }
]

function render(arr){
    return arr.map((ele,i)=>{
        return (
            <Route 
                path={ele.path}
                exact
                component={ele.component}
                key={i}
            />
        );
    });
}

export default render(routers);



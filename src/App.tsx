import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Acordion';
import {Rating, RatingProps} from "./components/Rating/Rating";
import {OnOff} from "./components/Rating/OnOff";
import UncontrolAccordion from "./components/UncontrollsAcordion";
import { UncontrolRating } from './components/Rating/UncontrolRating';
import {UncontroledOnOff} from "./components/Rating/UncontroledOnOff";

function App() {

    let [ratingValue,setRatingValue] = useState<0|1|2|3|4|5>(0)
    let [collapsed,setCollapsed] =useState<boolean>(false)
    let [on,setOn] =useState<boolean>(false)
    return (
        <div className="App">
      {/*      <UncontrolRating />
            */}

<Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontroledOnOff on={on} onChange={(on)=>{setOn(on)}} />
         {/*   <OnOff on={false}/>


<

            <Rating value={5}/>*/}
{/*<UncontrolAccordion title={'Yo'} collapsed={false}/>*/}
            <Accordion title={'Menu'} collapsed={collapsed}
            onChange={()=>{setCollapsed(!collapsed)}}
            />
      {/*      <Accordion title={'Acordion Title1111111'} collapsed={false}/>
            <Accordion title={'Acordion 222222222'} collapsed={true}/>*/}
   {/*      <PageTitle title={'My PageTitle'} />*/}

        </div>
    );
}

type PropsPageTitle={
    title:string
}

function PageTitle(props:PropsPageTitle) {
    return (
        <div><h3>{props.title}</h3></div>)}



export default App;


import logo from './logo.svg';
import './App.css';

function App() {
  
let data = [
  {title:"Mobile Operating System", list:["Android","Blekberry","iPhone","Windows Phone"]},
  {title:"Mobile Manufacturers", list:["Samsumg","HTC","Micromax","Apple"]}

  // {title:"Mobile Operating System", listItem1:"Android", listItem2:"Blekberry", listItem3:"iPhone", listItem4:"Windows Phone"},
  // {title:"Mobile Manufacturers", listItem1:"Samsumg", listItem2:"HTC", listItem3:"Micromax", listItem4:"Apple"}
];

  return (
    <div className="App">
       {/* {data.map((item)=> (<Component title={item.title} listItem1={item.listItem1} litype1={item.litype1} listItem2={item.listItem2} litype2={item.litype2} listItem3={item.listItem3} litype3={item.litype3} listItem4={item.listItem4} litype4={item.litype4} />))} */}
       {/* below two both valid way as long as both the keys are same  */}
       {/* {data.map((item)=> (Component({...item})))}  */}
       {data.map((item)=> <Component {...item}/>)}
    </div>
  );
}

function Component({title,list}) {
  return (
    <div>
      <h1>{title}</h1>
    
      <ul>
      {list.map((listItem)=> <ListComponent listData={listItem} />)}
         {/* <li>{listItem1}</li>
         <li>{listItem2}</li>
         <li>{listItem3}</li>
         <li>{listItem4}</li> */}
      </ul>
    </div>
  )
}


function ListComponent({listData}) {
  return (<li>{listData}</li>);
}

export default App;

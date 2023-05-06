import React,{useEffect} from "react";


function MarkList() {
  useEffect(()=>{
    console.log("a");
    fetch("")
  },[])
  console.log("b");
  return (
    <div className="MarkList">
      <ul>
        <li>Marcas cant</li>
        <li>Marcas cant</li>
        <li>Marcas cant</li>
        <li>Marcas cant</li>
        <li>Marcas cant</li>
        <li>GamaId cant</li>
      </ul>
    </div>
    
  );
}
export default MarkList;

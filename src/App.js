import React, {useState} from "react";

function calcMaterialPrice(mts, price, mtsTot) {

  let pricePerMt = price/mtsTot;
  return pricePerMt * mts;  

}

function calcElectricidadPrice(horas, minutos, potencia, precioPorKwh){
  let tiempo = parseInt(horas)+(parseInt(minutos)/60)
  console.log(tiempo)
  return (((potencia*tiempo)/1000)*(precioPorKwh))
}

function App() {
  //Material
  let [material, setMaterial] = useState({total:0});

  //Electricidad
  let [eletricidad, setElectricidad] = useState({total:0});

  function settingTotal(thestate) {
    setMaterial(state => { return {...state, "total":calcMaterialPrice(thestate.metros, thestate.rollo, thestate.mtstotal)} });
  }

  function settingElectricidad(thestate) {
    setElectricidad(state => { return {...state, "total":calcElectricidadPrice(thestate.horas, thestate.minutos, thestate.potencia, thestate.precioPorKwh)} });
  }

  return (
    <div className="App container">
      <div className="row">
        <header className="App-header">
          <a href="/index.html">Inicio</a>
        </header>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <h4>Material usado</h4>
          <label htmlFor="MetrosInput">Metros usados</label>
          <input type="text" placeholder="Metros Usados" className="form-control" id="MetrosInput" onChange={(input) => setMaterial(state => { settingTotal({...state, metros: input.target.value}); return {...state, metros: input.target.value}})}/>
          <label htmlFor="PrecioRolloInput">Precio del Rollo</label>
          <input type="text" placeholder="Precio por Rollo" className="form-control" id="PrecioRolloInput" onChange={(input) => setMaterial(state => { settingTotal({...state, rollo: input.target.value}); return {...state, rollo: input.target.value}})}/>
          <label htmlFor="MetrosPorRolloInput">Metros por rollo</label>
          <input type="text" placeholder="Metros por Rollo" className="form-control" id="MetrosPorRolloInput" onChange={(input) => setMaterial(state => { settingTotal({...state, mtstotal: input.target.value}); return {...state, mtstotal: input.target.value}})}/>
          <label>Total Material: ${material.total.toString().substring(0,material.total.toString().indexOf(".")+3||10) || 0}</label>
        </div>

        <div className="col-12 col-md-6">
          <h4>Electricidad Consumida</h4>
          <label htmlFor="PrecioPorKWhInput">Precio por KWh</label>
          <input type="text" placeholder="Precio Por KWh" className="form-control" id="PrecioPorKWhInput" onChange={(input) => setMaterial(state => { settingElectricidad({...state, precioPorKwh: input.target.value}); return {...state, precioPorKwh: input.target.value}})}/>
          <label htmlFor="HorasInput">Horas</label>
          <input type="text" placeholder="Horas Requeridas" className="form-control" id="HorasInput" onChange={(input) => setMaterial(state => { settingElectricidad({...state, horas: input.target.value}); return {...state, horas: input.target.value}})}/>
          <label htmlFor="MinutosInput">Minutos</label>
          <input type="text" placeholder="Minutos Requeridos" className="form-control" id="MinutosInput" onChange={(input) => setMaterial(state => { settingElectricidad({...state, minutos: input.target.value}); return {...state, minutos: input.target.value}})}/>
          <label htmlFor="MinutosPotenciaInput">Consumo Impresora</label>
          <input type="text" placeholder="Minutos Requeridos" className="form-control" id="MinutosPotenciaInput" onChange={(input) => setMaterial(state => { settingElectricidad({...state, potencia: input.target.value}); return {...state, potencia: input.target.value}})}/>
          <label>Total Energia: ${eletricidad.total.toString().substring(0,eletricidad.total.toString().indexOf(".")+3||10) || 0}</label>
        </div>
        <div className="col-12 col-md-6">
          <h4>Total + Utilidad: {((material.total+eletricidad.total).toString().substring(0,(material.total+eletricidad.total).toString().indexOf(".")+3||10) || 0)*5}</h4>
        </div>
      </div>
      <div className="row">
        <footer>
          <h4>El Pie</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;

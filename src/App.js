import React, {useState} from "react";
import Header from './Header';
import Footer from './Footer';

function calcMaterialPrice(mts, price, mtsTot) {
  let pricePerMt = price/mtsTot;
  return isNaN(pricePerMt * mts)?0:(pricePerMt * mts);  
}

function calcElectricidadPrice(horas, minutos, potencia, precioPorKwh){
  let tiempo = parseInt(horas)+(parseInt(minutos)/60)
  return (((potencia*tiempo)/1000)*(precioPorKwh))==NaN?0:(((potencia*tiempo)/1000)*(precioPorKwh));
}

function App() {
  //Material
  let [material, setMaterial] = useState({total:0});

  //Electricidad
  let [eletricidad, setElectricidad] = useState({total:0});

  //Utilidad
  let [utilidad, setUtilidad] = useState(1);

  function settingTotal(thestate) {
    setMaterial(state => {return {...state, "total":calcMaterialPrice(thestate.metros, thestate.rollo, thestate.mtstotal)} });
  }

  function settingElectricidad(thestate) {
    setElectricidad(state => { return {...state, "total":calcElectricidadPrice(thestate.horas, thestate.minutos, thestate.potencia, thestate.precioPorKwh)} });
  }

  return (
    <React.Fragment>
      <Header/>
    <div className="App container my-5 py-3">
      <div className="row">
        <div className="col-12 col-md-6 border p-3">
          <h4>Material usado</h4>
          <label htmlFor="MetrosInput">Metros usados</label>
          <input type="text" placeholder="Metros Usados" className="form-control" id="MetrosInput" onChange={(input) => setMaterial(state => { settingTotal({...state, metros: input.target.value}); return {...state, metros: input.target.value}})}/>
          <label htmlFor="PrecioRolloInput">Precio del Rollo</label>
          <input type="text" placeholder="Precio por Rollo" className="form-control" id="PrecioRolloInput" onChange={(input) => setMaterial(state => { settingTotal({...state, rollo: input.target.value}); return {...state, rollo: input.target.value}})}/>
          <label htmlFor="MetrosPorRolloInput">Metros por rollo</label>
          <input type="text" placeholder="Metros por Rollo" className="form-control" id="MetrosPorRolloInput" onChange={(input) => setMaterial(state => { settingTotal({...state, mtstotal: input.target.value}); return {...state, mtstotal: input.target.value}})}/>
          <label>Total Material: ${isNaN(material.total)?0:material.total.toFixed(2)}</label>
        </div>

        <div className="col-12 col-md-6 border p-3">
          <h4>Electricidad Consumida</h4>
          <label htmlFor="PrecioPorKWhInput">Precio por KWh</label>
          <input type="text" placeholder="Precio Por KWh" className="form-control" id="PrecioPorKWhInput" onChange={(input) => setElectricidad(state => { settingElectricidad({...state, precioPorKwh: input.target.value}); return {...state, precioPorKwh: input.target.value}})}/>
          <label htmlFor="HorasInput">Horas Requeridas</label>
          <input type="text" placeholder="Horas Requeridas" className="form-control" id="HorasInput" onChange={(input) => setElectricidad(state => { settingElectricidad({...state, horas: input.target.value}); return {...state, horas: input.target.value}})}/>
          <label htmlFor="MinutosInput">Minutos Requeridos</label>
          <input type="text" placeholder="Minutos Requeridos" className="form-control" id="MinutosInput" onChange={(input) => setElectricidad(state => { settingElectricidad({...state, minutos: input.target.value}); return {...state, minutos: input.target.value}})}/>
          <label htmlFor="MinutosPotenciaInput">Consumo Impresora en Watts</label>
          <input type="text" placeholder="Minutos Requeridos" className="form-control" id="MinutosPotenciaInput" onChange={(input) => setElectricidad(state => { settingElectricidad({...state, potencia: input.target.value}); return {...state, potencia: input.target.value}})}/>
          <label>Total Energia: ${isNaN(eletricidad.total)?0:eletricidad.total.toFixed(2)}</label>
        </div>
        <div className="col-12 col-md-6 border p-3">
          <label htmlFor="UtilidadInput">Porcentaje de Utilidad</label>
          <input type="text" placeholder="Porcentaje de utilidad" className="form-control" id="UtilidadInput" onChange={(input) => setUtilidad(input.target.value)}/>
          <hr/>
          <h4>Total + Utilidad: ${(((isNaN(material.total)?0:material.total)+(isNaN(eletricidad.total)?0:eletricidad.total))*(1+utilidad/100)).toFixed(2)}</h4>
        </div>
      </div>
      <Footer/>
    </div>
    </React.Fragment>
  );
}

export default App;

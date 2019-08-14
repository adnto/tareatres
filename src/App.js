import React from 'react';
import logo from './logo.svg';
import './App.css';

import produce from 'immer/dist/immer';

import {BarChart,  Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class App extends React.PureComponent {
	state = {
    date:'',
    equis:'',
    yuno:'',
    ydos:'',
		dates: [
			{
        date: '19/02/2019',
        xaxis: '10 feb de 2019',
        y1axis: 15,
        y2axis: 17,
			},{
        date: '10/07/2019',
        xaxis: '15 jul de 2019',
        y1axis: 6,
        y2axis: 35,
			},{
        date: '25/03/2019',
        xaxis: '7 marzo de 2019',
        y1axis: 15,
        y2axis: 29,
			}
		]
  };
  

  addRow = () => {

    const nextState = produce(this.state, (draft)=> {
      draft.dates.push({
          date:this.state.date,
          xaxis: this.state.equis,
          y1axis:this.state.yuno,
          y2axis:this.state.ydos,
      });
  })

  this.setState(nextState);
  this.setState({ date:'', equis: '', yuno: '', ydos: ''});
};
  
adddate= (event)=>{
    let valor = event.target.value;
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let ss = valor+'T07:22:13' ;
    let dat = new Date(ss);
    let letter = dat.toLocaleDateString([], options); 

    this.setState({date: valor, equis: letter});
}

addyuno= (event)=>{
  const valor = event.target.value;
  this.setState({yuno: valor});
}

addydos= (event)=>{
  const valor = event.target.value;
  this.setState({ydos: valor});
}

deleteRow = (key) => {
  const nextState = produce(this.state, (draft) => {
    draft.dates.splice(key, 1);
  });
  this.setState(nextState);
};

  render (){

    const { dates } = this.state;
    
    return(
    <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <h4 className="t_white">MIS DATOS</h4>
        </nav> 
      <div className="container">
        <br></br>  

        <div className="form-group row">
            <div className="form-group col-md-1">
              <label className="font-weight-bold" htmlFor="xaxis">X</label>
            </div>
            <div className="form-group col-md-3">
              <input type="date" className="form-control" id="xaxis" value= {this.state.date} onChange={(event) => this.adddate(event)}/>
            </div>
          { /* <div className="form-group">
              <button className="btn-xs btn-success"><i className="fa fa-plus-circle"></i> </button>
    </div> */}
          </div>

          <div className="form-group row">
            <div className="form-group col-md-1">
              <label className="font-weight-bold" htmlFor="yuno">Y1</label>
            </div>
            <div className="form-group col-md-3">
              <input type="text" className="form-control" id="yuno" placeholder="Y1 AXIS" value= {this.state.yuno} onChange={(event) => this.addyuno(event)}/>
            </div>
          {/* <div className="form-group">
              <button className="btn-xs btn-success "><i className="fa fa-plus-circle"></i> </button>
  </div> */}
          </div> 

          <div className="form-group row">
            <div className="form-group col-md-1">
              <label className="font-weight-bold" htmlFor="ydos">Y2</label>
            </div>
            <div className="form-group col-md-3">
              <input type="text" className="form-control" id="ydos" placeholder="Y2 AXIS" value= {this.state.ydos} onChange={(event) => this.addydos(event)} />
            </div>
            <div className="form-group">
              <button onClick={() => this.addRow()} className="btn-xs btn-success"><i className="fa fa-plus-circle"></i> Agregar</button>
            </div>
          </div>  
        


        <div className="form-group row">

          <div className="col-md-5" key="1">
                <div className="card border-info mb-3">
                  <div className="card-header bg-transparent border-info">X AXIS</div>
                  <div className="card-body text-success">

                    <ul className="list-group">

                    {dates.map((date, i) => (

                          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">{date.xaxis}
                            <button className="btn-xs btn-danger" onClick={() => this.deleteRow(i)}>
                              <i className="fa fa-times"></i>
                            </button>
                          </li>
                    ))}
                      
                    </ul>  

                  </div>
                  <div className="card-footer bg-transparent border-info">Footer</div>
                </div>
          </div>

          <div className="col-md-3" key="2">
                <div className="card border-info mb-3">
                  <div className="card-header bg-transparent border-info">Y1 AXIS</div>
                  <div className="card-body text-success">
                    {/*<h5 className="card-title">Success card title</h5>*/}
                    <ul className="list-group">
                    {dates.map((date, i) => (

                      <li  key={i} className="list-group-item d-flex justify-content-between align-items-center">{date.y1axis}
                        <button className="btn-xs btn-danger" onClick={() => this.deleteRow(i)}>
                          <i className="fa fa-times"></i>
                        </button>
                      </li>

                    ))}
                    </ul>                
                  </div>
                  <div className="card-footer bg-transparent border-info">Footer</div>
                </div>
          </div>

          <div className="col-md-3" key="3">
            <div className="card border-info mb-3">
              <div className="card-header bg-transparent border-info">Y2 AXIS</div>
              <div className="card-body text-success">
              {dates.map((date, i) => (

                <li  key={i} className="list-group-item d-flex justify-content-between align-items-center">{date.y2axis}
                  <button className="btn-xs btn-danger" onClick={() => this.deleteRow(i)}>
                    <i className="fa fa-times"></i>
                  </button>
                </li>

                ))}              
              </div>
              <div className="card-footer bg-transparent border-info">Footer</div>
            </div>
          </div>

        </div>

          <div className="col-md-6" key="4"></div>
            <table>
              <tbody>

              <tr>
                  <th>XAXIS</th>
                  <th>Y1AXIS</th>
                  <th>Y2AXIS</th>
              </tr>

              {dates.map((date, i) => {
                  return (
                      <tr key={i}>
                          <td>{date.xaxis}</td>
                          <td>{date.y1axis}</td>
                          <td>{date.y2axis}</td>
                      </tr>
                  );
              })}

              </tbody>
            </table>
            
        </div>
        <br></br>
        <br></br>
        <div >
          {
            //console.log('datos barra: ',dates)
          }
          <BarChart
              width={700}
              height={500}
              data={dates}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="xaxis" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="y1axis" fill="#8884d8" />
              <Bar dataKey="y2axis" fill="#82ca9d" />
          </BarChart>                
        </div>
    </div>
    );
  }
}


export default App;

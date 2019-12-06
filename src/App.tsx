import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as ham from './clases'
//import { element } from 'prop-types';

interface Istate {
	pedido: ham.Hamburguesa

}
class App extends React.Component<{}, Istate>{

	constructor(props: any) {
		super(props)
		var pan = new ham.Pan(new ham.normalPan())
		var carne = new ham.Carnes()
		var vegetales = new ham.Vegetales()
		var hamburguesa = new ham.Hamburguesa(pan, carne, vegetales)
		this.state = {
			pedido: hamburguesa
		}
	}
	setCarne(carne: ham.carne) {
		var Carnes = this.state.pedido.getCarnes()
		Carnes.setCarne(carne)
		this.setState({})
	}
	setVegetales(veg: ham.vegetal) {
		var vegetal = this.state.pedido.getVegetales()
		vegetal.setVegetales(veg)
		this.setState({})
	}
	setPan(pan: ham.pan) {
		this.state.pedido.setPane(pan)
		this.setState({})
	}

	render() {
		//var b: ham.Pan = new ham.Pan(new ham.normalPan())
		//console.log(b)
		var listPanes: ham.pan[] = [new ham.frances(), new ham.integral(), new ham.normalPan()]
		var listVegetales: ham.vegetal[] = [new ham.lechuga(), new ham.tomate(), new ham.cebolla(), new ham.none()]
		var listCarne: ham.carne[] = [new ham.pollo(), new ham.res(), new ham.cordero(), new ham.tocino(), new ham.cerdo(), new ham.none()]
		//console.log(this.state.pedido)

		return (
			<div className="App">
				<div>
					pan
        			<div>
						{listPanes.map((ele: ham.pan) => {
							return (
								<button key={ele.nombre} onClick={() => this.setPan(ele)}  >
									{ele.nombre + " $" + ele.precio / 10}
								</button>)
						})}
					</div>
				</div>
				<div>
					carne
        			<div>
						{listCarne.map((ele: ham.carne) => {
							return (
							<button key={ele.nombre} onClick={() => this.setCarne(ele)}>
								{ele.nombre + " $" + ele.precio / 10}
							</button>)
						})}
					</div>
				</div>
				<div>
					vegetales
        			<div>
						{listVegetales.map((ele: ham.vegetal) => {
							return (
							<button key={ele.nombre} onClick={() => this.setVegetales(ele)}>
								{ele.nombre + " $" + ele.precio / 10}
							</button>)
						})}
					</div>
				</div>

				<div>
					contenido



        			<div>
						<div className={"pan"}  >pan {this.state.pedido.getPan().getName()}</div>
						{this.state.pedido.getCarnes().getList().map(element => {
							return (
								<div className={"carne"} key={element.nombre + "out"}>
									{element.nombre+ " $"+element.precio/10 }
								</div>
							)
						})}
						{this.state.pedido.getVegetales().getList().map(element => {
							return (
								<div className={"vegetal"} key={element.nombre + "out"} >
									{element.nombre+ " $"+element.precio/10 }
								</div>
							)
						})}
						<div className={"pan"} >pan {this.state.pedido.getPan().getName()+ " $"+this.state.pedido.getPan().getPrecio()/10 }</div>
					<div className={"plato"} > precio total ${this.state.pedido.getPrecio()/10}</div>
					</div>
				</div>

			</div>
		);
	}
}




export default App;

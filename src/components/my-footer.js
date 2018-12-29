import React,{Component} from 'react'


class MyFooter extends Component{
	constructor(){
		super()
		this.state = {
			copyright:'© 2018,ioplus ',
			beian:'蜀ICP备16036699号-3',
			link:'http://www.miitbeian.gov.cn/'
		}
	}
	render(){
		return (
			<footer className='footer'>
				<div className='copyright'><a href={this.state.link}>{this.state.copyright+this.state.beian}</a></div>
			</footer>
			)
	}
}

export  default MyFooter;
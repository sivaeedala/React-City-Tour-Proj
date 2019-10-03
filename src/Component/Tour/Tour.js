import React,{Component} from 'react'
import './tour.scss'

export default class Tour extends Component{
    state={
        showInfo:false
    }

    toggleInfo=()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

render(){
    const{id,img,city,name,info} =this.props.tour;
    return(
        <article className="tour">
            <div className="img-container">
            <img src={img} alt="city tour image"></img>
            <span className="close-btn" onClick={()=>{this.props.removeTour(id)}}>
            <i className="fas fa-window-close" ></i>
            </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info
                    <span>
                    <i class="fas fa-caret-square-down" onClick={this.toggleInfo}></i>
                    </span>
                </h5>
                {/* <button type='button' onClick={()=>{this.props.removeTour(id)}}>Remove me</button>
                <button type='button'onClick={this.toggleInfo}>Toggle</button> */}
                {
                    this.state.showInfo?<p>{info}</p>:null

                }
            </div>


        </article>

    )
}
}



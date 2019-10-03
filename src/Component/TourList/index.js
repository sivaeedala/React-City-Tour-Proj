import React, { Component } from 'react'
import Tour from '../Tour' // Tour Js will imported directly since confiregd as main in Pakage.json in Tour folder
import  './tourlist.scss'
import {tourData} from '../../TourData';
export default class TourList extends Component {
    state={
        tours:tourData
    }
    removeTour=(id)=>{
        var filterTour=this.state.tours.filter(e=>e.id!==id)
        this.setState({
            tours:filterTour
        })

    }
    render() {
        const {tours}=this.state
        return (
            <section className="tourlist">
                {
                    tours.map(t=>
                        <Tour key={t.id} tour={t} removeTour={this.removeTour}></Tour>
                    )
                }
            </section>
        )
    }
}


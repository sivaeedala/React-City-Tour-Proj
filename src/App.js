import React from 'react'
import './App.scss'
import Navbar from './Component/NavBar/Navbar' // Directly Importing the JS file
import TourList from './Component/TourList' // Index.Js will directly imported without name,Importing only the Component Folder


class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <Navbar></Navbar>
                <TourList></TourList>
            </React.Fragment>
        )
    }
}

export default App
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import './Palette.css'

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level: 500, format: 'hex'};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({level});
    }

    changeFormat(format){
        this.setState({format: format});
    }

    render(){
        const {colors, paletteName,emoji} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(c => (
            <ColorBox key={c.id} background={c[format]} name={c.name} />
        ));

        return(
            <div className='Palette'>
                <Navbar handleChange={this.changeFormat} changeLevel={this.changeLevel} level={level}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <footer className='Palette-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;
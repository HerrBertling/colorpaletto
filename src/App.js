import React, { Component } from 'react';
import chroma from 'chroma-js';
import { SketchPicker } from 'react-color';

import { Palette, ColorCard, Header } from './components';

import './App.css';

class App extends Component {

    state = {
        displayColorPicker: false,
        mainColor: '#5A73B0',
        fontColor: '#262425',
        lightFontColor: '#72716f',
        accentColor: '#935ab0',
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        let originColor = chroma(color.hex);
        let scaleEnd = {};

        if (originColor.get('hcl.h') > 120) {
            scaleEnd.hue = originColor.get('hcl.h') - 120;
        } else {
            scaleEnd.hue = originColor.get('hcl.h') + 241;
        }

        if (originColor.get('hcl.c') > 20) {
            scaleEnd.chroma = 120 - originColor.get('hcl.c');
        } else {
            scaleEnd.chroma = 80 + originColor.get('hcl.c');
        }

        if (originColor.get('hcl.l') > 20) {
            scaleEnd.lightness = 130 - originColor.get('hcl.l');
        } else {
            scaleEnd.lightness = 70 + originColor.get('hcl.l');
        }

        const scaleEndColor = chroma(
            scaleEnd.hue,
            scaleEnd.chroma,
            scaleEnd.lightness,
            'hcl'
        ).hex();
        const accentScale = chroma.scale([originColor, scaleEndColor]).mode('lab').correctLightness();
        const accentColor = accentScale(0.9).hex();

        const fontScale = chroma.scale([originColor, '000']).mode('lab').correctLightness();
        const fontColor = fontScale(0.9).luminance(0.03).hex();

        const lightFontScale = chroma.scale([originColor, '666']).mode('lab').correctLightness();
        const lightFontColor = lightFontScale(0.95).luminance(0.2).hex();

        this.setState({
            mainColor: color.hex,
            fontColor: `${fontColor}`,
            lightFontColor: `${lightFontColor}`,
            accentColor: `${accentColor}`
        })

    };

    render() {
        return (
            <div>
                <Header />
                <Palette>
                    <div className='colorpickerWrapper'>
                        <ColorCard
                            name='Main color'
                            color={this.state.mainColor}
                            onClick={ this.handleClick }
                        />
                        { this.state.displayColorPicker ? <div className='colorpicker'>
                            <div className='colorpickerUnderlay' onClick={ this.handleClose }/>
                                <SketchPicker color={ this.state.mainColor } onChange={ this.handleChange } />
                            </div> : null
                        }
                    </div>
                    <ColorCard
                        name='Font color'
                        color={this.state.fontColor}
                    />
                    <ColorCard
                        name='Font color (light)'
                        color={this.state.lightFontColor}
                    />
                    <ColorCard
                        name='Accent color'
                        color={this.state.accentColor}
                    />

                    <ColorCard
                        name='Background'
                        color='#FFFFFF'
                    />
                </Palette>
            </div>
        );
    }
}

export default App;

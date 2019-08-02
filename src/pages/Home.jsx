import React from 'react'
import { InputSearchHomePage } from '../components/forms/InputSearchHomePage';
import AutoCompleteSearch from '../components/forms/AutoCompleteSearch';
import MapWithAutoComplete from '../components/forms/MapWithAutoComplete';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                {/* <InputSearchHomePage /> */}
                {/* <AutoCompleteSearch/>   */}
                <MapWithAutoComplete google={this.props.google}
     center={{lat: 28.46, lng: -16.27}}
     height='300px'
     zoom={15}/>              

            </div>
        )

    }
}
/**
 * This is the '/current' page
 */

import React from 'react'
import axios from 'axios'

import AppBar from '../../components/AppBar/AppBar'
import CurrentCard from './CurrentCard'
import Container from '@material-ui/core/Container'

const END_POINT = "https://api.openweathermap.org/data/2.5/weather?q=";
const APPID = "&APPID=eda439d629165a345559e6e9043cf085&units=";
const UNIT = "metric";

const Current = () => {
    const getData = (city_name) => {
        const URL = `${END_POINT}${city_name}${APPID}${UNIT}`

        // TODO: how do we get data with the URL above
        // and store the data into the state to use?
        // hint: axios.get(URL) ...
        // Review the usage of 'useState' if you forgot how to use React state in function component

        // Also, you should handle error and alert() an error message when the city is not found
    }

    /**
     * This function will be triggered when the user press any key
     * TODO: When user pressed 'Enter', 
     * clear the input field, pass the string in the input field to 'getData()', 
     * and display the current data of the city the user entered
     */
    const handleOnKeyDown = (ev) => {
        if (ev.key === 'Enter') {
            console.log('pressed enter')
        }
    }

    return (
        <div>
            <AppBar 
                title='Weather App - Current' 
                onKeyDown={ev => handleOnKeyDown(ev)}
                // TODO: need to bind more actions here
                // think about how could we get the input and use it
                // hint: pass a function to the props 'onChange', and in that function, update the state storing the input
            />

            <Container maxWidth='md' style={{marginTop:'30px'}}>
                    {/* TODO: use .map() here to render the list of weather in different cities to the screen
                        You might need the ternary operator to render the text 'Type in the search field to add city' 
                        when the user haven't add any city to the screen

                        If you want your componet to behave exactly the same as in the demo,
                        you might need to use the 'Grid' component in Material UI
                    */}
            </Container>
        </div>
    )
}

export default Current;
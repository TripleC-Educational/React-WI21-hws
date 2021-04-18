/**
 * This is the 'forcast' page
 */

import React from 'react'
import axios from 'axios'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import AppBar from '../../components/AppBar/AppBar'
import ForcastCard from './ForcastCard'

const END_POINT = "https://api.openweathermap.org/data/2.5/forecast?q=";
const APPID = "&APPID=eda439d629165a345559e6e9043cf085&units=";
const UNIT = "metric";

const Forcast = () => {

    const getData = (city_name) => {
        const URL = `${END_POINT}${city_name}${APPID}${UNIT}`
        
        // Make sure you understand how to use axios

        // TODO: how do we store the data into the state to use?
        // Review the usage of 'useState' if you forgot how to use React state in function component

        // Also, you should handle error and alert() an error message when the city is not found
        axios.get(URL)
        .then(r => {
            // open the console to see what's the data look like
            console.log(r)
        })
        .catch(e => {
            console.log(e)
        })
    }

    /**
     * This function will be triggered when the user press any key
     * TODO: When user pressed 'Enter', 
     * clear the input field, pass the string in the input field to 'getData()', 
     * and display the forcast data of the city the user entered
     */
    const handleOnKeyDown = ev => {
        // if 'Enter' is pressed, things in this block will execute
        if (ev.key === 'Enter') {
            console.log('pressed enter')
        }
    }

    // This function is like 'componentDidMount'
    // You can set the initial state of the component here
    React.useEffect(() => {
        // here we try to get the forcast data of Chengdu (as an example)
        getData('Chengdu')
    }, [])

    return (
        <div>
            <AppBar 
                title='Weather App - Forcast' 
                // TODO: need to bind more actions here
                // think about how could we get the input and use it
                // hint: trigger a state update on 'onChange', and store the value in a state
            />
            <Container maxWidth='md'>
                <Typography variant="h4" gutterBottom style={{ paddingTop: '30px', textAlign:'center' }}>
                    {/* TODO: display the name of the current city here */}
                </Typography>

                {/* TODO: use .map() here to render the list of weather in different cities to the screen

                    e.g.
                    data.map(item => (
                        <ForcastCard item={item}/>
                    )))
                    
                    If you want your componet to behave exactly the same as in the demo,
                    you might need to use the 'Grid' component in Material UI
                */}
            </Container>
        </div>
    )
}

export default Forcast;
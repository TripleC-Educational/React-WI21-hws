import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const About = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Weather App - About
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth='md'>
                {/* TODO: add your own description of this weather app here */}
            </Container>
        </div>

    )
}

export default About
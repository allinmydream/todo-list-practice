import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default Container = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxwidth="sm">
                <Typography component="div" style={{backgroundColor: 'yellow', height: '100vh'}}/>
            </Container>
        </React.Fragment>
    )
}
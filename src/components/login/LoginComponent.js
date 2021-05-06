import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import LoginCardComponent from './LoginCardComponent';

const useStyles = createUseStyles((theme) => ({
    container: {
        height: '100vh'
    },
    title: {
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px'
    }
}));

function LoginComponent({}) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <Row
            vertical='center'
            horizontal='center'
            style={{ backgroundColor: theme.color.veryDarkGrayishBlue }}
        >
            <Column vertical='center' alignContent='center' className={classes.container}>
                <LoginCardComponent />
            </Column>
        </Row>
    );
}

export default LoginComponent;

import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        padding: '24px 64px 24px 64px',
        height: '100%'
    },
    containerMobile: {
        padding: '12px 16px 6px 16px !important'
    },
    itemSpacing: {
        margin: 5,
        display: 'block',

        ...theme.typography.itemTitle
    },
    title: {
        ...theme.typography.title,
        color: theme.color.veryDarkGrayishBlue,
        fontSize: 32
    }
}));

function LoginCardComponent({}) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <Row horizontal='center'>
            <Column className={classes.container} breakpoints={{ 426: classes.containerMobile }}>
                <Row horizontal='center'>
                    <Column style={{ marginBottom: 24 }}>
                        <span className={classes.title}>Login</span>
                    </Column>
                </Row>
                <Row horizontal='center'>
                    <Column>
                        <span className={classes.itemSpacing} style={{}}>
                            User Name
                        </span>
                        <input className={classes.itemSpacing} type='text' data-test='username' />

                        <span className={classes.itemSpacing}>Password</span>
                        <input
                            className={classes.itemSpacing}
                            type='password'
                            data-test='password'
                        />

                        <input
                            className={classes.itemSpacing}
                            type='submit'
                            value='Log In'
                            data-test='submit'
                            style={{
                                backgroundColor: theme.color.lightGrayishBlue2,
                                borderWidth: 0.3,
                                borderColor: 'rgba(0, 0, 0, 0.3)',
                                marginTop: 10,
                                padding: 6
                            }}
                        />
                    </Column>
                </Row>
            </Column>
        </Row>
    );
}

export default LoginCardComponent;

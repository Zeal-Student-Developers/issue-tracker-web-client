import React, { useContext, useEffect, useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { LoginContext } from 'contexts/LoginContext';
import { authService } from 'services/auth';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 15,
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

function LoginCardComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorLogin, setErrorLogin] = useState(false);
    const [loginStatus, setLoginStatus] = useState('no');

    useEffect(() => {
        async function tryLogin() {
            if (loginStatus === 'pending') {
                if ((await authService.login(username, password)) === true) {
                    setErrorLogin(false);
                    setLoginStatus('done');
                    setIsLoggedIn(true);
                } else {
                    setErrorLogin(true);
                    setLoginStatus('no');
                }
            }
        }
        tryLogin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginStatus]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginStatus('pending');
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

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
                        <input
                            className={classes.itemSpacing}
                            type='text'
                            onChange={handleUsername}
                        />

                        <span className={classes.itemSpacing}>Password</span>
                        <input
                            className={classes.itemSpacing}
                            type='password'
                            onChange={handlePassword}
                        />

                        <input
                            className={classes.itemSpacing}
                            type='submit'
                            value='Log In'
                            onClick={handleLogin}
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

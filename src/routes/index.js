import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';
import { LoginContext } from 'contexts/LoginContext';

function Routes() {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

    useEffect(() => {
        if (!isLoggedIn && localStorage.getItem('jwt')) setIsLoggedIn(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const isUserLoggedIn = isLoggedIn;
    return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}

export default Routes;

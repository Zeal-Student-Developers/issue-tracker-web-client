import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.grayishBlue3}`,
        borderRadius: 4,
        padding: '24px 32px 0px 32px',
        height: '100%'
    },
    containerMobile: {
        padding: '12px 16px 6px 16px !important'
    },
    subtitle: {
        ...theme.typography.smallSubtitle,
        color: theme.color.grayishBlue2
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.veryDarkGrayishBlue
    },

    issueMiniCardComponentSpacing: {
        marginLeft: 10,
        marginRight: 10
    }
}));

export default useStyles;

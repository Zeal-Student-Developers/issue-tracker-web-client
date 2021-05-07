import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CardComponent from 'components/cards/CardComponent';
import AuthorityCardComponent from './AuthorityCardComponent';

const useStyles = createUseStyles((theme) => ({
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    itemValue: {
        color: theme.color.grayishBlue2
    }
}));

let items = [
    { key: 'Minimum Solutions', name: 'Ben Stokes' },
    { key: 'Maximum Solutions', name: 'Chris Gayle' },
    { key: 'Minimum Comments', name: 'Virat Kohli' },
    { key: 'Maximum Comments', name: 'MS Dhoni' }
];

const AuthorityListDistribution = ({ title, subtitle, itms, containerStyles = {} }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    itms = items;

    function renderStat(key, name) {
        return (
            <Row horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{key}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>{name}</span>
            </Row>
        );
    }

    return (
        <AuthorityCardComponent
            containerStyles={containerStyles}
            title={title}
            subtitle={subtitle}
            items={itms.map((value) => renderStat(value.key, value.name))}
            param1='Distribution Name'
            param2='Authority Name'
        />
    );
};

export default AuthorityListDistribution;

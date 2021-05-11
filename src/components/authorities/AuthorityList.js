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
    { name: 'Ben Stokes', comments: '34', solutions: '12' },
    { name: 'Virat Kohli', comments: '23', solutions: '4' },
    { name: 'Chris Gayle', comments: '56', solutions: '21' },
    { name: 'M.S. Dhoni', comments: '12', solutions: '18' },
    { name: 'Ashwin', comments: '3', solutions: '1' },
    { name: 'K.L Rahul', comments: '12', solutions: '18' },
    { name: 'Steve Smith', comments: '17', solutions: '11' },
    { name: 'Jessie Ryder', comments: '53', solutions: '6' },
    { name: 'Robin Uthappa', comments: '12', solutions: '9' },
    { name: 'Saurabh Ganguly', comments: '19', solutions: '14' },
    { name: 'Rahul Dravid', comments: '21', solutions: '24' },
    { name: 'Sachin Tendulkar', comments: '45', solutions: '28' }
];

const AuthorityList = ({ title, subtitle, itms, containerStyles = {} }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    itms = items;

    function renderStat(name, comments, solutions) {
        return (
            <Row horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{name}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>{comments}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>
                    {solutions}
                </span>
            </Row>
        );
    }

    return (
        <AuthorityCardComponent
            containerStyles={containerStyles}
            title={title}
            subtitle={subtitle}
            items={itms.map((value) => renderStat(value.name, value.comments, value.solutions))}
            param1='Authority Name'
            param2='Comments'
            param3='Solutions'
        />
    );
};

export default AuthorityList;

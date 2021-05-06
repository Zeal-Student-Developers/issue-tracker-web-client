import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CardComponent from 'components/cards/CardComponent';

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
    { title: 'January', val: '34' },
    { title: 'February', val: '23' },
    { title: 'March', val: '56' },
    { title: 'April', val: '12' },
    { title: 'May', val: '3' },
    { title: 'June', val: '12' },
    { title: 'July', val: '17' },
    { title: 'August', val: '53' },
    { title: 'September', val: '12' },
    { title: 'October', val: '19' },
    { title: 'November', val: '21' },
    { title: 'December', val: '45' }
];

function IssuesByMonth({ title, itms, containerStyles = {} }) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    itms = items;

    function renderStat(title, value) {
        return (
            <Row horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{title}</span>
                <span className={[classes.itemTitle, classes.itemValue].join(' ')}>{value}</span>
            </Row>
        );
    }

    return (
        <CardComponent
            containerStyles={containerStyles}
            title={title}
            link='View Graph'
            subtitle='Shows issues posted by month'
            items={itms.map((value) => renderStat(value.title, value.val))}
        />
    );
}

export default IssuesByMonth;

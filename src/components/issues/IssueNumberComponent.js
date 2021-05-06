import React from 'react';
import { Row, Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import IssueBasics from './IssuesInNumbers/IssueBasics';
import IssueViolations from './IssuesInNumbers/IssueViolations';
import IssueDeparments from './IssuesInNumbers/IssueDepartments';
import IssuesByMonth from './IssuesInNumbers/IssuesByMonth';

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

function IssueNumberComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <Column wrap={true}>
            <IssueBasics />
            <IssueViolations />
            <IssueDeparments />
            <Row>
                <IssuesByMonth title='Issues Posted By Month' />
                <IssuesByMonth title='Issues Resolved By Month' />
            </Row>
        </Column>
    );
}

export default IssueNumberComponent;

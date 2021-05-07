import React from 'react';
import { Row, Column } from 'simple-flexbox';
import IssueBasics from './IssuesInNumbers/IssueBasics';
import IssueViolations from './IssuesInNumbers/IssueViolations';
import IssueDeparments from './IssuesInNumbers/IssueDepartments';
import IssuesByMonth from './IssuesInNumbers/IssuesByMonth';

function IssueNumberComponent() {
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

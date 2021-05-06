import MiniCardComponent from 'components/cards/MiniCardComponent';
import React from 'react';
import { Row, Column } from 'simple-flexbox';
import { useTheme } from 'theming';
import useStyles from './styleClasses';

export default function IssueBasics() {
    const theme = useTheme;
    const classes = useStyles({ theme });
    return (
        <Column>
            <Row style={{ marginBottom: 20 }}>
                <Column
                    flexGrow={1}
                    className={classes.container}
                    breakpoints={{ 426: classes.containerMobile }}
                >
                    <Row horizontal='space-between'>
                        <Column style={{ paddingBottom: 20, width: '100%' }}>
                            <span className={classes.title}>Issues Basics</span>
                            <Row style={{ marginTop: 8, marginBottom: 16 }}>
                                <span className={classes.subtitle}>
                                    Shows the basic information of issues in the system
                                </span>
                            </Row>
                            <Row horizontal='space-evenly'>
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Total'
                                    value='180'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Resolved'
                                    value='70'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Pending'
                                    value='110'
                                />
                            </Row>
                        </Column>
                    </Row>
                </Column>
            </Row>
        </Column>
    );
}

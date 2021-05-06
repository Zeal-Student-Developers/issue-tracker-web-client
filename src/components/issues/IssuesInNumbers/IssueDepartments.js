import MiniCardComponent from 'components/cards/MiniCardComponent';
import React from 'react';
import { Row, Column } from 'simple-flexbox';
import { useTheme } from 'theming';
import useStyles from './styleClasses';

export default function IssueDeparments() {
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
                    <Row>
                        <Column style={{ paddingBottom: 20, width: '100%' }}>
                            <span className={classes.title}>Department wise Issues</span>
                            <Row style={{ marginTop: 8, marginBottom: 16 }}>
                                <span className={classes.subtitle}>
                                    Shows the # of issues made in each Department
                                </span>
                            </Row>
                            <Row style={{ marginBottom: 20 }}>
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Computer'
                                    value='54'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Mechanical'
                                    value='43'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='IT'
                                    value='39'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Electrical'
                                    value='87'
                                />
                            </Row>
                            <Row>
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='E&TC'
                                    value='67'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Civil'
                                    value='64'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='MBA'
                                    value='18'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Institute Level'
                                    value='79'
                                />
                            </Row>
                        </Column>
                    </Row>
                </Column>
            </Row>
        </Column>
    );
}

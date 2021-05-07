import MiniCardComponent from 'components/cards/MiniCardComponent';
import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { useTheme } from 'theming';
import useStyles from './styleClasses';

function AuthorityStatsByLevel() {
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
                            <span className={classes.title}>Authority Stats by Levels</span>
                            <Row style={{ marginTop: 8, marginBottom: 16 }}>
                                <span className={classes.subtitle}>
                                    Shows the information of # of solutions posted by different
                                    levels.
                                </span>
                            </Row>
                            <Row horizontal='space-evenly'>
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Authority Level 1'
                                    value='43'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Authority Level 2'
                                    value='65'
                                />
                                <MiniCardComponent
                                    className={classes.issueMiniCardComponentSpacing}
                                    title='Authority Level 3'
                                    value='38'
                                />
                            </Row>
                        </Column>
                    </Row>
                </Column>
            </Row>
        </Column>
    );
}

export default AuthorityStatsByLevel;

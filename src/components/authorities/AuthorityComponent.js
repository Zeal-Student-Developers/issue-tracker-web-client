import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import AuthorityList from './AuthorityList';
import AuthorityStatsByLevel from './AuthorityStatsByLevel';
import AuthorityListDistribution from './AuthorityListDistribution';

const useStyles = createUseStyles((theme) => ({
    container: {
        width: '50%'
    }
}));

const AuthorityComponent = ({ title, itms, containerStyles = {} }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <Column>
            <Column>
                <AuthorityStatsByLevel />
                <Row>
                    <AuthorityList
                        title='List of Authorities'
                        subtitle='Show authorities and their # of comments and solutions'
                    />
                    <AuthorityListDistribution
                        title='Distribution of Authorities'
                        subtitle='Show authorities and min, max, average aggregations'
                    />
                </Row>
            </Column>
        </Column>
    );
};

export default AuthorityComponent;

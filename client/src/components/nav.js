import React from "react";
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import './../App.css';

const Nav = () => {
    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    <Link to="/" className="nav-link">Student List</Link>
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    <Link to="/create" className="nav-link">Create Student</Link>
               </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    );
};

export default Nav



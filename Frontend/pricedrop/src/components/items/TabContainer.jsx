import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ItemContainer from "./ItemContainer";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div style={styles.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" />
          <Tab label="Group One" />
          <Tab label="Group Two" />
          <Tab label="Group Three" />
          <Tab label="Group Four" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <Container>
            <ItemContainer />
          </Container>
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <Container>
            <ItemContainer />
          </Container>
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <Container>
            <ItemContainer />
          </Container>
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          <Container>
            <ItemContainer />
          </Container>
        </TabContainer>
      )}
      {value === 4 && (
        <TabContainer>
          <Container>
            <ItemContainer />
          </Container>
        </TabContainer>
      )}
    </div>
  );
}

export default ScrollableTabsButtonAuto;
// export default TabContainer;

const styles = {
  root: {
    flexGrow: 1,
    width: "100%"
    // backGroundColor: white,
  }
};

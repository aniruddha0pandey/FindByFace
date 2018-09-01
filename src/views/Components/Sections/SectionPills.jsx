import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Url from "@material-ui/icons/Language";
import Upload from "@material-ui/icons/PermMedia";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

// searchbar components
import SearchBar from "../../../components/InfoArea/Searchbar.jsx";

import image4 from "assets/img/gif-instant-camera.gif";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2>How It Works?</h2>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={6}>
              
                <NavPills
                  color="info"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Url",
                      tabIcon: Url,
                      tabContent: (
                        <span>
                          <p>
                            <SearchBar />
                            <strong>Recommedation: </strong>
                            The uploaded photo hopes to be of high clarity.
                            Face should be clearly visible for quality
                            face recognition.
                          </p>
                          <br />
                          <p>
                            Photo will be desired to contain single person.
                            A mugshot will be immensely appraised.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Upload",
                      tabIcon: Upload,
                      tabContent: (
                        <span>
                          <p>
                            <form>
                              <input type="file" />
                            </form>
                            Our Algorithm recognise key features of the face with
                            peak accuarcy. A Neural Network then process this image
                            to suggest the feasible result.
                          </p>
                          <br />
                          <p>
                            Our Database is trained with hundreds of examples.
                            And our current archive contains 100 peoples.
                            Image size greater than 200K and format other than
                            jpg/jpeg will be descarded.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <img src={image4} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);

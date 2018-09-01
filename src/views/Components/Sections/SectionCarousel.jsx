import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Profile from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/pri1.jpg";
import image2 from "assets/img/pri2.jpg";
import image3 from "assets/img/pri3.jpg";
import image4 from "assets/img/pri4.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section} id='try'>
        <div className={classes.container}>
          <div className={classes.title} style={{textAlign: 'center'}}>
            <h1>Try from our Dataset!</h1>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                      align="middle"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Profile className="slick-icons" />&nbsp;Priyanka Chopra
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                      align="middle"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Profile className="slick-icons" />&nbsp;Priyanka Chopra
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                      align="middle"
                    />
                    <div className="slick-caption">
                      <h4>
                        <Profile className="slick-icons" />&nbsp;Priyanka Chopra
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);

import PropTypes from "prop-types";

import Footer from "@components/footer";
import Homepage from "@components/home-page";
import Navbar from "@components/navbar";

const Layout = ({ contactCardHeading, child, showContactCard }) => (
  <>
    <Navbar />
    {child}
    <Footer
      contactCardHeading={contactCardHeading}
      showContactCard={showContactCard}
    />
  </>
);

Layout.defaultProps = {
  child: <Homepage />,
  contactCardHeading: "Let us know how we can assist you",
};

Layout.propTypes = {
  child: PropTypes.node.isRequired,
  showContactCard: PropTypes.bool,
  contactCardHeading: PropTypes.string,
};

export default Layout;

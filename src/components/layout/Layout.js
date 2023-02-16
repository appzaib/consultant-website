import PropTypes from "prop-types";

import Footer from "@components/footer";
import Homepage from "@components/home-page";
import Navbar from "@components/navbar";

const Layout = ({ child, showContactCard }) => (
  <>
    <Navbar />
    {child}
    <Footer showContactCard={showContactCard} />
  </>
);

Layout.defaultProps = {
  child: <Homepage />,
};

Layout.propTypes = {
  child: PropTypes.node.isRequired,
  showContactCard: PropTypes.bool,
};

export default Layout;

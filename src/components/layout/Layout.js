import PropTypes from "prop-types";

import Footer from "@components/footer";
import Homepage from "@components/home-page";
import Navbar from "@components/navbar";

const Layout = ({ children, showContactCard }) => (
  <>
    <Navbar />
    {children}
    <Footer showContactCard={showContactCard} />
  </>
);

Layout.defaultProps = {
  children: <Homepage />,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showContactCard: PropTypes.bool,
};

export default Layout;

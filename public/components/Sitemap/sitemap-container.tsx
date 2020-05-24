
import { connect } from "react-redux";
import { SitemapComponentWithStyles } from "../Sitemap/sitemap-component";

const mapStateToProps = state => {
  return {
    currentTheme: state.applicationThemeReducer.currentTheme
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export const SitemapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SitemapComponentWithStyles);

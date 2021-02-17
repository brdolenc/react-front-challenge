import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Yellow from './yellow';

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      background: PropTypes.string,
      primary: PropTypes.string,
      secondary: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
  children: PropTypes.node.isRequired,
};


Theme.defaultProps = { theme: Yellow };

export default Theme;

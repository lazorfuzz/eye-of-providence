/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Bar = styled.div`
  width: 100%;
  background-color: rgb(49, 52, 64);
  color: #888;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  padding: 30px 10px 50px 10px;
  font-size: 12px;
  -webkit-box-shadow: 0px -4px 24px -9px rgba(0,0,0,1);
  -moz-box-shadow: 0px -4px 24px -9px rgba(0,0,0,1);
  box-shadow: 0px -4px 24px -9px rgba(0,0,0,1);
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
`;

const Link = styled.a`
  color: #00E676;
  text-decoration: none;
  &:hover {
    color: #00ff81;
  }
  &:active {
    color: #009b4f;
  }
`;

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Bar>
        <Text>Made with <span role="img" aria-label="lots of alcoholic beverages" title="lots of alcoholic beverages ¯\_(ツ)_/¯">🍺</span> by Leon Li. All cams were found with the Shodan API, and were made public by their owners. <Link href="https://github.com/lazorfuzz/eye-of-providence">View this app on GitHub.</Link></Text>
      </Bar>
    );
  }
}

Footer.propTypes = {

};

export default Footer;

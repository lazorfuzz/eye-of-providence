/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

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

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Bar>
        <FormattedMessage {...messages.header} />
      </Bar>
    );
  }
}

Footer.propTypes = {

};

export default Footer;

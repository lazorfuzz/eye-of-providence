/**
*
* AppBar
*
*/

import React from 'react';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Bar = styled.div`
  width: 100%;
  background-color: rgb(49, 52, 64);
  color: #00E676;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  overflow-x: hidden;
  align-items: center;
  -webkit-box-shadow: 0px 4px 24px -9px rgba(0,0,0,1);
  -moz-box-shadow: 0px 4px 24px -9px rgba(0,0,0,1);
  box-shadow: 0px 4px 24px -9px rgba(0,0,0,1);
`;

const Title = styled.h1`
  font-weight: lighter;
`;

const Version = styled.p`
  color: #888;
  margin-left: 10px;
`;

class AppBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Bar>
        <Title>Eye of Providence</Title><Version>0.0.2</Version>
      </Bar>
    );
  }
}

AppBar.propTypes = {

};

export default AppBar;

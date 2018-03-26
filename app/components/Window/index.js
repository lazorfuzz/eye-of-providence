import React from 'react';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Cam = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Link = styled.a`
  color: #00E676;
  text-decoration: none;
`;

const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  text-align: center;
  color: #00E676;
  font-size: 16px;
  padding: 5px;
  margin: 15px 15px;
  border-radius: 10px;
  border: 1px solid #00E676;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  &:hover {
    margin-top: 12px;
    -webkit-box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.75);
  }
  &:hover ${Link} {
    color: white;
  }
`;

class Window extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <div style={{ height: '85%', marginBottom: '5px' }}>
          <Link href={this.props.videoSrc} target="_blank">
            <Cam
              alt="cam"
              src={this.props.videoSrc}
            />
          </Link>
        </div>
        <Link href={this.props.link} target="_blank">{this.props.ip}</Link>
      </Wrapper>
    );
  }
}

export default Window;

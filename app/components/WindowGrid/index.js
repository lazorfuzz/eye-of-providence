import React from 'react';
import styled from 'styled-components';
import Window from '../Window';

const Wrapper = styled.div`
  padding: 5px;
  margin: 2em 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 85vh;
`;

class WindowGrid extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.generateWindows = this.generateWindows.bind(this);
  }

  generateWindows() {
    return this.props.videos.map((vid) => {
      return (
        <Window
          key={vid}
          videoSrc={vid}
          ip={vid.split(':')[1].replace('//', '')}
          link={vid.replace('/video', '')}
        />
      );
    });
  }

  render() {
    return (
      <Wrapper>
        {this.generateWindows()}
      </Wrapper>
    );
  }
}

WindowGrid.propTypes = {

};

export default WindowGrid;

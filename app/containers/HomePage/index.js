import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import WindowGrid from '../../components/WindowGrid';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
    this.getVideos = this.getVideos.bind(this);
    this.checkVideos = this.checkVideos.bind(this);
    this.checkUp = this.checkUp.bind(this);
  }

  componentDidMount() {
    this.getVideos();
  }

  getVideos() {
    fetch(`${location.href}api/cams`)
      .then((res) => res.json())
      .then((data) => this.checkVideos(data))
      .catch(console.error);
  }

  checkUp(cam) {
    return new Promise((resolve) => {
      fetch(cam.replace('/video', ''))
        .then((res) => {
          if (res.ok) {
            this.setState({ videos: [...this.state.videos, cam] });
            return resolve(cam);
          }
          return resolve(null);
        })
        .catch((err) => {
          console.log('err', err);
          return resolve(null);
        });
    });
  }

  checkVideos(cams) {
    return Promise.all(cams.map((c) => this.checkUp(c.url)))
      .then((data) => {
        return data.filter((d) => d);
      });
  }

  render() {
    return (
      <WindowGrid
        videos={this.state.videos}
      />
    );
  }
}

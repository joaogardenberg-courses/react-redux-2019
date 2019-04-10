import React from 'react';

class ImageCard extends React.Component {
  state = { spans: 1 };
  imageRef = React.createRef();

  render() {
    const { alt_description, urls: { regular } } = this.props.image;
    const { spans }                              = this.state;

    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img src={ regular } alt={ alt_description } ref={ this.imageRef } />
      </div>
    );
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.onImageLoaded);
  }

  onImageLoaded = ({ target: { clientHeight } }) => {
    this.setState({ spans: Math.ceil(clientHeight / 10) });
  };
}

export default ImageCard;
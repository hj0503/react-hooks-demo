import React from 'react';
import Row from '../../../../components/Row';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <section>
        <Row label="width">{this.state.width}</Row>
      </section>
    );
  }
}

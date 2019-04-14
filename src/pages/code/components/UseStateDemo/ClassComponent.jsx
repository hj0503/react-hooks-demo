import React from 'react';
import Row from '../../../../components/Row';
import styles from '../../../../components/Row/Row.less';
import { ThemeContext } from '../../index';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
      surname: 'Poppins',
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.surname;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <section className={styles[theme]}>
            <Row label="name">
              <input value={this.state.name} onChange={this.handleNameChange} />
            </Row>
            <Row label="surname">
              <input value={this.state.surname} onChange={this.handleSurnameChange} />
            </Row>
            <Row label="width">
              {this.state.width}
            </Row>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}

import React from 'react';
import Row from '../../../../components/Row';
import styles from '../../../../components/Row/Row.less'
import { ThemeContext } from '../../index';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
      surname: 'Poppins',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
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
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}

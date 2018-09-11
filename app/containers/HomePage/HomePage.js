/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  constructor(props) {
    super(props);
    this.state = {
      textUser: ''
    };

  }
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Input text</h2>
            <textarea
              id = "textUser">
            </textarea>
            <button onClick={()=>{
              // alert(document.getElementById('textUser').value);
              let textUserValue = document.getElementById('textUser').value;
              this.setState({textUser: textUserValue});
            }}>Ввести текст</button>
            <h2>Click on unknown words for translate</h2>
            <p>
              {
                this.state.textUser &&
                this.state.textUser
                .split(' ')
                .map(word => 
                  <span onClick={()=>alert(word)}>
                    {word+' '}
                  </span>
                )
              }
            </p>
          </section>
          <section>
            <h2>Try me!</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
              Show Github repositories by
                <span className="at-prefix">@</span>
                <input
                  id="username"
                  type="text"
                  placeholder="flexdinesh"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </form>
            <ReposList {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

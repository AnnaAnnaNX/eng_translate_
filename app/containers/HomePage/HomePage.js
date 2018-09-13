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
    this.state = {};
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
    const exampleText = 'cat fog run read fast fat';

    return (
      <article>
        <Helmet>
          <title>Translate</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Input text</h2>
            <textarea
              id = "textUser"
              className = 'inputUserText'
            >
            {exampleText}
            </textarea>
            <button
              className = "inputUserTextButton"
             onClick={()=>{
              //alert(document.getElementById('textUser').value);
              let textUserValue = document.getElementById('textUser').value;
              this.props.onChangeUserText(textUserValue);
            }}>Download text</button>
            <h2>Click on unknown words for translate</h2>
            <p>
            {
              this.props.userArrayText.map(a=>{
                return (
                  <span 
                    key={a.id} 
                    onClick={()=>{if (!a.translate) this.props.onTranslate(a);}}
                    className="block-word"
                  >
                    {
                      a.translate &&
                      (<span className="translate">
                        {a.translate[a.userChoise]}
                      </span>)
                    }
                    <span className="word">
                      {a.word+' '}
                    </span>
                  </span>)
              })
            }
            </p>
          </section>
        </div>
      </article>
    );
  }
}
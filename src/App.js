import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import whlogo from './images/whlogo.png';
import baimg from './images/baimg.png';

import { NewsCards, Modal } from './components';
import useStyles from './styles';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const alanBtnInstance = alanBtn({
    //  me--
      // key: '4bfb4282fea544a2497aa27089f9a6bb2e956eca572e1d8b807a3e2338fdd0dc/stage',
      // sample--
      key: '29da5f8838fdc054497aa27089f9a6bb2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtnInstance.playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtnInstance.playText('Opening...');
          } else {
            alanBtnInstance.playText('Please try that again...');
          }
        }
      },
    });
    alanBtnInstance.activate();
    alanBtnInstance.playText("Hello! I'm Alan. How can I help you?");

    // const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    // const recognition = new SpeechRecognition();
    // recognition.continuous = true;

    // recognition.onresult = (event) => {
    //   const current = event.resultIndex;
    //   // eslint-disable-next-line prefer-destructuring
    //   const transcript = event.results[current][0].transcript;
    //   console.log(transcript.toLowerCase());
    //   if (transcript.toLowerCase() === ' wake up') {
    //     alanBtnInstance.activate();
    //     alanBtnInstance.playText('i am listening....');
    //   }
    // };

    // recognition.onend = () => {
    //   if (!alanBtnInstance.isActive()) {
    //     // console.log('started one');
    //     recognition.start();
    //   }
    // };

    // if (!alanBtnInstance.isActive()) {
    //   recognition.start();
    //   // console.log('started two');
    // } else {
    //   recognition.stop();
    //   // console.log('stopped');
    // }
    // // console.log('this is it',alanBtnInstance.isActive());
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h4">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h4">Try saying: <br /><br />Go back </Typography></div>
          </div>
        ) : null}
        <img src={baimg} className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a className={classes.link} href="https://www.linkedin.com/in/shyam-m-aa9026240/"> Shyam M</a> -
          </Typography>
          <img className={classes.image} src={whlogo} height="30px" alt="Github logo" />
          <Typography variant="body1" component="h2">
            -<a className={classes.link} href="https://github.com/Maxxjx"> Maxxjx</a>
          </Typography>
        </div>
      ) : null}
    </div>
  );
};

export default App;

import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
  { color: '#00695c', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s happening with PlayStation 5' },
  { color: '#2e7d32', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in timeout={800}>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} key={index}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color, transition: 'all 0.3s ease', transform: `translateY(${index * 10}px)`, animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in timeout={800}>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }} key={i}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;

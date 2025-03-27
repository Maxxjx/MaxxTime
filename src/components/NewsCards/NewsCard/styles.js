import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 250,
    transition: 'transform 0.4s ease',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid #424242',
    backgroundColor: '#212121',
    color: '#f5f5f5',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
      '& $media': {
        transform: 'scale(1.05)',
      }
    },
  },
  activeCard: {
    borderBottom: '10px solid #1976D2',
    backgroundColor: '#212121',
    color: '#f5f5f5',
    boxShadow: '0 4px 20px rgba(25, 118, 210, 0.4)',
    transform: 'translateY(-8px)',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: '#BDBDBD',
  },
  title: {
    padding: '0 16px',
    color: '#f5f5f5',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

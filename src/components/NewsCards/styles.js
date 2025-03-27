import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxHeight: '47vh',
    minHeight: '300px',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#212121',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
    },
  },
  infoCard: {
    display: 'flex', 
    flexDirection: 'column', 
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  container: {
    padding: '0 5%', 
    width: '100%', 
    margin: 0,
    animation: '$fadeIn 0.8s ease-out',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

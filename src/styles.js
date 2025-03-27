import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: '#f5f5f5',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '56px',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(18, 18, 18, 0.9)',
    backdropFilter: 'blur(8px)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#2196F3',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#64B5F6',
    },
  },
  image: {
    marginLeft: 20,
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(33, 33, 33, 0.9)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 25px rgba(0, 0, 0, 0.4)',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
    height: '28vmin',
    borderRadius: '15%',
    padding: '0 5%',
    margin: '3% 0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
    },
    [theme.breakpoints.down('sm')]: {
      height: '35vmin',
    },
  },
}));

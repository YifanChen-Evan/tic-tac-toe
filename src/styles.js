// Material UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        textAlign: 'center',
    },
    statusDiv: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: theme.palette.primary.secondary,
        textAlign: 'center',
        marginBottom: '2rem',
    },
    square: {
        height: '3rem',
        width: '3rem',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: theme.palette.primary.light,
    },
    boardRow: {
        display: 'flex',
        justifyContent: 'center',
    },
    historyBtn: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: theme.palette.info.main,
        padding: '0.5rem',
    },
    currentHistoryBtn: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.light,
        padding: '0.5rem',
    },
    game: {
        display: 'flex',
        justifyContent: 'center',
        
    },
    gameInfo: {
        marginTop: '3rem',
        marginLeft: '3rem',
    },
}));

export default useStyles;
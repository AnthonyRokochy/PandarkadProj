import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../../../../contexts/contexts';
import GalleriesDescription from '../../../../description/galleries';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 300,
  },
  image: {
    position: 'relative',
    height: 200,
    margin: '12px',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function ButtonBases() {
  const classes = useStyles();
  const { lang } = useContext(AppContext);
  return (
      <div className={classes.root}>
          {
            _.map(GalleriesDescription, (item) => (
              // eslint-disable-next-line react/jsx-key
                <Link className='Linker' to={item.path}>
                    <ButtonBase
                      focusRipple
                      key={item.title}
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}
                      style={{
                        width: '350px',
                      }}
                    >
                        <span
                          className={classes.imageSrc}
                          style={{
                            backgroundImage: `url(${item.prevImg})`,
                          }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                              component='span'
                              variant='subtitle1'
                              color='inherit'
                              className={classes.imageTitle}
                            >
                                { dict.translate(`Genre.${item.title}`, lang) }
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                </Link>
            ))
}
      </div>
  );
}

function select(store) {
  return {
    // lang: store.viewReducer.lang,
    dict: store.viewReducer.dict,
  };
}

export default connect(select)(ButtonBases);

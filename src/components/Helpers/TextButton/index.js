/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../contexts/contexts';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();
  const { lang } = useContext(AppContext);
  return (
      <div>
          <Button variant='outlined' color='inherit' className={classes.button}>
              <Link className='Linker' to='/genre'>{ dict.translate('Opening.Enter', lang)}</Link>
          </Button>
      </div>
  );
}

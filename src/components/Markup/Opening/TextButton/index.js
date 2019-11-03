/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import { OPEN_PAGE } from '../../../redux/actions/actions';
import { AppContext } from '../../../../contexts/contexts';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function OutlinedButtons() {
  const classes = useStyles();
  const { lang } = useContext(AppContext);
  return (
      <div>
          <Link className='Linker' to='/genre'>
              <Button variant='outlined' color='inherit' className={classes.button}>
                  { dict.translate('Opening.Enter', lang) }
              </Button>
          </Link>
      </div>
  );
}

OutlinedButtons.propTypes = {
  dispatch: PropTypes.func.isRequired,
  //
};

function select(/* store */) {
  return { };
}

export default connect(select)(OutlinedButtons);

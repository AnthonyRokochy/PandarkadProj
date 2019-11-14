import {
  Button, Fade, Paper, ClickAwayListener, MenuItem,
} from '@material-ui/core';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { AppContext } from '../../contexts/contexts';
import { CHANGE_LANG } from '../../redux/actions/actions';
import languages from '../../dictionary/lang';

const Language = () => {
  const [opened, setOpened] = useState(null);
  const { lang } = useContext(AppContext);
  const dispatch = useDispatch();

  const setLang = (newLang) => {
    setOpened(false);
    dispatch(CHANGE_LANG(newLang));
  };

  const caption = (key) => dict.translate(`common.${key}`, lang);

  return (
      <ClickAwayListener onClickAway={() => setOpened(false)}>
          <div className='LanguageContainer'>
              <Button
                className='LanguageButton'
                aria-controls='lang_menu'
                aria-haspopup='true'
                onClick={() => setOpened(true)}
              >
                  {caption(lang)}
              </Button>
              <Fade in={opened} timeout={0.6}>
                  <Paper className='LanguageBoard'>
                      {
                            _.map(languages, (_, key) => (
                                <MenuItem
                                  className='MenuLanguage'
                                  onClick={() => setLang(key)}
                                  key={key}
                                  dense
                                >
                                    {caption(key)}
                                </MenuItem>
                            ))
                        }
                  </Paper>
              </Fade>
          </div>
      </ClickAwayListener>
  );
};

Language.propTypes = {
  //
};

Language.defaultProps = {};

export default Language;

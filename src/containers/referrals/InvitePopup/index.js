import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Button } from '@blueprintjs/core';

import { closeInvitePopup, inviteUsers } from '../../../redux/modules/referrals/invitePopup';

import Popup from '../../../containers/common/Popup';
import EmailsInput from '../../common/EmailsInput';

import s from './styles.css';

const InvitePopup = (props) => {
  const {
    t,
    open,
    spinner,
    closeInvitePopup,
    inviteUsers
  } = props;

  return (
    <Popup
      title={t('inviteReferrals')}
      isOpen={open}
      onClose={() => closeInvitePopup()}>
      <div>
        <div className={s.text}>{t('inviteByEmail')}</div>

        <EmailsInput placeholder={t('enterEmails')}/>

        <div className={s.tip}>{t('deleteEmailTip')}</div>

        <Button
          loading={spinner}
          onClick={() => inviteUsers()}
          type="button">{t('invite')}</Button>
      </div>
    </Popup>
  );
};

const TranslatedComponent = translate('referrals')(InvitePopup);

export default connect(
  (state) => ({
    open: state.referrals.invitePopup.open,
    spinner: state.referrals.invitePopup.spinner
  }),
  {
    closeInvitePopup,
    inviteUsers
  }
)(TranslatedComponent);

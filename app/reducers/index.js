import { combineReducers } from 'redux';

import appData from './appData';
import navigation from './navigation';
import currentDailyCard from './currentDailyCard';
import settings from './settings';
import cardDetail from './cardDetail';
import cardStack from './cardStack';
import emailModal from './emailModal';

const rootReducer = combineReducers({
  appData,
  cardDetail,
  cardStack,
  currentDailyCard,
  emailModal,
  navigation,
  settings,
});

export default rootReducer;

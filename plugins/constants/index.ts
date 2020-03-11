import { Constants } from '~/types/injection/constants';
import content from './content';
import screens from './screens';
import socials from './socials';
import routing from './routing';

const constants: Constants = Object.freeze({
  content,
  screens,
  socials,
  routing,
});

export default constants;

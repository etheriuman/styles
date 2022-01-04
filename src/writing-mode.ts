import { DASH, MODE } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class WritingModeStyle extends Style {
    static override key = 'writing' + DASH + MODE;
}
import { OPACITY } from './constants/css-property-keyword';
import { Style } from '@master/style';

export class OpacityStyle extends Style {
    static override key = OPACITY;
    static override unit = '';
}
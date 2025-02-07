import { Style } from '@master/style';

export class UserSelectStyle extends Style {
    static override matches = /^user-select:./;
    override get props(): { [key: string]: any } {
        return {
            'user-select': this,
            '-webkit-user-select': this
        }
    };
}
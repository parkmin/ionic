import { Component } from '@stencil/core';
import { Mode } from '../../interface';
import { createThemedClasses } from '../../utils/theme';


@Component({
  tag: 'ion-title',
  styleUrls: {
    ios: 'title.ios.scss',
    md: 'title.md.scss'
  },
  host: {
    theme: 'title'
  }
})
export class ToolbarTitle {
  mode!: Mode;
  color!: string;

  render() {
    const themedClasses = createThemedClasses(this.mode, this.color, 'toolbar-title');

    return [
      <div class={themedClasses}>
        <slot></slot>
      </div>
    ];
  }
}

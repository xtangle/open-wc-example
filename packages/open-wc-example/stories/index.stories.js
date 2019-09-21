import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { OpenWcExample } from '../src/OpenWcExample.js';
import '../open-wc-example.js';

storiesOf('open-wc-example', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(OpenWcExample))
  .add(
    'Alternative Title',
    () => html`
      <open-wc-example .title=${'Something else'}></open-wc-example>
    `,
  );

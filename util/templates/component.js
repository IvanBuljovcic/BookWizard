module.exports = (componentName) => ({
content: `// Generated with util/create-component.js
import React from 'react';

import { I${componentName}Props } from './${componentName}.types';
import styles from './${componentName}.module.scss';

const ${componentName}: React.FC<I${componentName}Props> = ({ foo }) => (
    <div data-testid='${componentName}' className={styles.foo_bar}>{foo}</div>
);

export default ${componentName};
`,
extension: `.tsx`
});
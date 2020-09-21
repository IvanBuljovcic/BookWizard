module.exports = (componentName) => ({
content: `// Generated with util/create-component.js
import React from 'react';

// Components
import * as S from './${componentName}Styles';

// Typings
import { I${componentName}Props } from './${componentName}.types';

const ${componentName}: React.FC<I${componentName}Props> = ({ foo }) => (
  <S.${componentName} data-testid="${componentName}">
    <h1>
      Component generated with <code>util/create-component.js</code>
    </h1>
    {foo}
  </S.${componentName}>
);

export default ${componentName};
`,
type: 'main',
extension: `.tsx`
});

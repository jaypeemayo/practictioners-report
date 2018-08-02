import * as React from 'react';
import App from '../src/components/App';
import * renderer from 'react-test-renderer';

it('should render App', () => {
    const component = renderer.create(
        <App/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});

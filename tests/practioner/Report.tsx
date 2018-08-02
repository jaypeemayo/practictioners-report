import * as React from 'react';
import * renderer from 'react-test-renderer';
import Report from '../../src/components/practioner/Report';

it('Report is rendered', () => {
    const component = renderer.create(
        <Report/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});

import * as React from 'react';
import * renderer from 'react-test-renderer';
import ReportPage from '../../src/components/practioner/ReportPage';

it('ReportPage is rendered', () => {
    const component = renderer.create(
        <ReportPage/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});

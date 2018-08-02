import * as React from 'react';
import * renderer from 'react-test-renderer';
import Appointment from '../../src/components/practioner/Appointment';

it('should render appointment', () => {

    let appointment = {
        clientName: "string",
        cost: 100,
        date: new Date(2000),
        duration: 200,
        id: 1,
        revenue:300,
        type: "Type A"
    };

    const component = renderer.create(
        <Appointment {...appointment}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});


it('should toggle when clicking appointment', () => {

    let appointment = {
        clientName: "string",
        cost: 100,
        date: new Date(2000),
        duration: 200,
        id: 1,
        revenue:300,
        type: "Type A"
    };

    const component = renderer.create(
        <Appointment {...appointment}/>,
      );

      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      tree.props.onClick();
      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});


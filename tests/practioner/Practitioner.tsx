import * as React from 'react';
import * renderer from 'react-test-renderer';
import Practitioner from '../../src/components/practioner/Practitioner';
import { IAppointment } from '../../src/components/practioner/IAppointment';

test('Practioners with empty appointments', () => {
    const component = renderer.create(
        <Practitioner name={"DummyName"} appointments={[]}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});

test('Practioner with an appointment', () => {
    const component = renderer.create(
        <Practitioner name={"DummyName"} appointments={[    {
            clientName: "string",
            cost: 100,
            date: new Date(2000),
            duration: 200,
            id: 1,
            revenue:300,
            type: "Type A"
        } as IAppointment as IAppointment] as IAppointment[]}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});

test('onclick header', () => {
    const component = renderer.create(
        <Practitioner name={"DummyName"} appointments={[    {
            clientName: "string",
            cost: 100,
            date: new Date(2000),
            duration: 200,
            id: 1,
            revenue:300,
            type: "Type A"
        } as IAppointment as IAppointment] as IAppointment[]}/>,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      tree.children[0].children[0].props.onClick()
      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
      tree.children[0].children[0].props.onClick()
      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});

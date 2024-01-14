// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-18';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

// Add a serializer for Enzyme snapshots
expect.addSnapshotSerializer(toJSON);

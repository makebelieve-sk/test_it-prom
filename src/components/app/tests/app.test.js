import React from 'react';
import ReactDOM from 'react-dom'; 
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from '../app';

Enzyme.configure({ adapter: new Adapter() });

it(`App correctly rendering`, () => {
    const tree = renderer  
        .create(<App />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

describe('App correctly rendering and functioning', () => {
    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it(`+++ App renders without crashing`, () => {
        const div = document.createElement('div');
      
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('+++ render the connected App', () => {
        expect(wrapper.length).toEqual(1);
    });
});
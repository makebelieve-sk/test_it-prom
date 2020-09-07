import React from 'react';
import ReactDOM from 'react-dom'; 
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MainBlock } from '../main-block';

Enzyme.configure({ adapter: new Adapter() });

it(`MainBlock correctly rendering`, () => {
    const tree = renderer  
        .create(<MainBlock />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

describe('MainBlock correctly rendering and functioning', () => {
    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<MainBlock />);
    });

    it(`+++ MainBlock renders without crashing`, () => {
        const div = document.createElement('div');
      
        ReactDOM.render(<MainBlock />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('+++ render the connected MainBlock', () => {
        expect(wrapper.length).toEqual(1);
    });
});
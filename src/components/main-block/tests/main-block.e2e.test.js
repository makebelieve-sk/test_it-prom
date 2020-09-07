import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MainBlock } from '../main-block';

Enzyme.configure({ adapter: new Adapter() });

const setUp = () => shallow(<MainBlock />);

describe(`MainBlock component`, () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it(`clickHandler is realize`, () => { 
        const clickHandler = jest.fn();

        const btn1 = component.find(".button-in-list").at(0);

        btn1.simulate(`click`);
    
        //expect(clickHandler).toHaveBeenCalledTimes(1);
    });
});
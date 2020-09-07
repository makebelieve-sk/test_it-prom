import React from 'react';
import ReactDOM from 'react-dom'; 
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CellComponent } from '../cell-component';

Enzyme.configure({ adapter: new Adapter() });

const mock = {
    elem: `some string`,
    editMode: `editMode`,
    clickProp: jest.fn(),
    j: 2,
    i: 1,
    handleSubmit: jest.fn()
};

it(`CellComponent correctly rendering`, () => {
    const tree = renderer  
        .create(<CellComponent 
            elem = {mock.elem}
            editMode = {mock.editMode}
            clickProp = {mock.clickProp}
            handleSubmit = {mock.handleSubmit}
            i = {mock.i}
            j = {mock.j}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

describe('CellComponent correctly rendering and functioning', () => {
    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<CellComponent 
            elem = {mock.elem}
            editMode = {mock.editMode}
            clickProp = {mock.clickProp}
            handleSubmit = {mock.handleSubmit}
            i = {mock.i}
            j = {mock.j}
        />);
    });

    it(`+++ CellComponent renders without crashing`, () => {
        const div = document.createElement('div');
      
        ReactDOM.render(<CellComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('+++ render the connected CellComponent', () => {
        expect(wrapper.length).toEqual(1);
    });
});
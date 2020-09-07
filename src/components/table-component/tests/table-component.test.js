import React from 'react';
import ReactDOM from 'react-dom'; 
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { TableComponent } from '../table-component';

Enzyme.configure({ adapter: new Adapter() });

const mock = {
    data: {
        header: [`1`, `2`, `3`],
        body: [[`1`], [`2`]],
    },
    setData: jest.fn()
};

const setUp = () => shallow(<TableComponent 
    data={mock.data}
    setData={mock.setData}
/>);

it(`TableComponent correctly rendering with props`, () => {
    const tree = renderer  
        .create(<TableComponent 
            data={mock.data}
            setData={mock.setData}
        />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

describe('TableComponent correctly rendering and functioning', () => {
    let wrapper;
  
    beforeEach(() => {
        wrapper = setUp();
    });

    it(`+++ TableComponent renders without crashing`, () => {
        const div = document.createElement('div');
      
        ReactDOM.render(<TableComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('+++ render the connected TableComponent', () => {
        expect(wrapper.length).toEqual(1);
    });
});
import React from 'react';
import { shallow } from 'enzyme';

//sut
import ${CLASS_NAME} from '../${CLASS_NAME}';

const setup = propOverrides => {
  const props = {
    ...propOverrides
  };
  
  const wrapper = shallow(<${CLASS_NAME} {...props} />);
  
  return {
    wrapper,
    props,
    instance: wrapper.instance()
  };
};

describe('${CLASS_NAME}', () => {
  it('renders', () => {
    const { wrapper } = setup();
  });
});

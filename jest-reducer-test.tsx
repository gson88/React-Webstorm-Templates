import React from 'react';
import { shallow } from 'enzyme';

//sut
import ${CLASS_NAME}, { Props } from '../${CLASS_NAME}';

const setup = (propOverrides: Partial<Props> = {}, alterPropsCallback = null) => {
  const props: Props = {
    ...propOverrides
  };

  if (alterPropsCallback) {
    alterPropsCallback(props);
  }

  const wrapper = shallow(<${CLASS_NAME} {...props} />);

  return {
    wrapper,
    props,
    instance: wrapper.instance()
  };
};

describe('${CLASS_NAME}', () => {
  it('renders', () => {
    const { wrapper } = setup();
  });
});

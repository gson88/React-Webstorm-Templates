import React from 'react';
import { shallow } from 'enzyme';

//sut
import ${CLASS_NAME} from '../${CLASS_NAME}';


describe('${CLASS_NAME}', () => {
  let props;
  beforeEach(() => {
    props = {};
  });

  it('renders', () => {
    shallow(<${CLASS_NAME} {...props} />);
  });
});
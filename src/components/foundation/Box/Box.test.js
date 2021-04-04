import React from 'react';
import { create } from 'react-test-renderer';
import Box from './index';

describe('<Box />', () => {
  describe('it renders', () => {
    test('without props and children', () => {
      expect(create(<Box />).toJSON()).toMatchSnapshot();
    });
    test('with element chlidren centered in the middle of the screen', () => {
      const childrenMock = 'Teste';
      const component = create(
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="30%"
          height="30%"
        >
          {childrenMock}
        </Box>,
      ).toJSON();
      // Assertations
      expect(...component.children).toBe(childrenMock);
      expect(component).toHaveStyleRule('width', '30%');
      expect(component).toHaveStyleRule('height', '30%');
      expect(component).toHaveStyleRule('display', 'flex');
      expect(component).toHaveStyleRule('justify-content', 'center');
      expect(component).toHaveStyleRule('align-items', 'center');
      // Snapshot
      expect(component).toMatchSnapshot();
    });
  });
});

import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen, AllTheProviders } from '../../../infra/test/testUtils';
import Text from './index';

describe('</Text>', () => {
  describe('its render', () => {
    describe('as default', () => {
      test('with props mobile and desktop', () => {
        const childrenMock = 'Teste';
        const component = create(
          <AllTheProviders>
            <Text tag="h1" mobile="titleXS" desktop="titleMD">
              {childrenMock}
            </Text>
          </AllTheProviders>,
        ).toJSON();
        // Assertions
        expect(...component.children).toBe(childrenMock);
        expect(component.type).toBe('h1');
        // Snapshot
        expect(component).toMatchSnapshot();
      });
      test('without props and children', () => {
        // Assertions
        expect(
          create(
            <AllTheProviders>
              <Text />
            </AllTheProviders>,
          ),
        ).toMatchSnapshot();
        //
      });
    });
    describe('as href(Link)', () => {
      test('and props mobile and desktop', () => {
        const childrenMock = 'Teste';
        render(
          <Text href="/" mobile="titleXS" desktop="titleMD">
            Teste
          </Text>,
        );
        // Assertions
        const element = screen.getByRole('link', { name: /teste/i });
        expect(element).toContainHTML(childrenMock);
        expect(element).toHaveAttribute('href', '/');
        //
        expect(element).toMatchSnapshot();
      });
    });
  });
});

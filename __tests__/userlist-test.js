import 'react-native';
import React from 'react';
import UserList from 'Containers/UserList';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <UserList />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

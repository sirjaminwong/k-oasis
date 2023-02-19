import React from 'react';
import styles from './my-shelf.module.scss';
interface Props {}

const _MyShelf: React.FC<Props> = () => {
  return <div></div>;
};
export const MyShelf = React.memo(_MyShelf);

import styles from './Avatar.module.scss';

export const Avatar = (props) => {
  return (
    <img
      className={props.bordered ? styles.avatarWithBorder : styles.avatar}
      src='https://avatars.githubusercontent.com/u/69679068?v=4'
      alt='Gabriel Borel avatar'
    />
  );
};

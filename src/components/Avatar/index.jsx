import styles from './Avatar.module.scss';

export const Avatar = ({ hasBorder = true, src, alt }) => {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt={alt} />
  );
};

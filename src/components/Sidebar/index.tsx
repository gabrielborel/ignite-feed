import styles from './Sidebar.module.scss';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />

      <div className={styles.profile}>
        <Avatar
          alt='Avatar do Gabriel Borel'
          src='https://avatars.githubusercontent.com/u/69679068?v=4'
        />

        <strong>Gabriel Borel</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine weight='bold' size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

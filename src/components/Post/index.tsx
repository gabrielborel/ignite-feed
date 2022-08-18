import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.scss';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'link' | 'paragraph';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export const Post = ({ author, publishedAt, content }: PostProps) => {
  const [comments, setComments] = useState(['Legaaal demais !!!']);
  const [newCommentContent, setnewCommentContent] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
    locale: ptBr,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();

    const updatedComments = [...comments, newCommentContent];
    setComments(updatedComments);
    setnewCommentContent('');
  };

  const handleNewCommentContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('');
    setnewCommentContent(e.target.value);
  };

  const deleteComment = (commentToDelete: string) => {
    const updatedComments = comments.filter((comment) => comment !== commentToDelete);
    setComments(updatedComments);
  };

  const handleNewCommentInvalid = (e: InvalidEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('Comentário é obrigatório!');
  };

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }, id) => {
          switch (type) {
            case 'paragraph':
              return <p key={id}>{content}</p>;
            case 'link':
              return (
                <p key={id}>
                  <a href='#'>{content}</a>
                </p>
              );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          value={newCommentContent}
          onChange={handleNewCommentContentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button disabled={!newCommentContent} type='submit'>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, id) => (
          <Comment content={comment} onDeleteComment={deleteComment} key={id} />
        ))}
      </div>
    </article>
  );
};

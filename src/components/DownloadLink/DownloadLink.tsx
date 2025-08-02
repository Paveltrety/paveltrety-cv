import classNames from 'classnames';
import styles from './DownloadLink.module.css';

interface IButtonProps {
  text: string;
  pathFile: string;
  linkClassName?: string;
}

export const DownloadLink = ({ pathFile, text, linkClassName }: IButtonProps) => {
  return (
    <a href={pathFile} className={classNames(styles.root, linkClassName)} download>
      <span>{text}</span>
    </a>
  );
};

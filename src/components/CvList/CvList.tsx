import classNames from 'classnames';
import styles from './CvList.module.css';
import { CV_LIST } from '../../data/data';
import { DownloadLink } from '../DownloadLink/DownloadLink';
import { TFileFormat } from '../../data/types';
import { useMemo } from 'react';

interface IResumesListProps {
  className?: string;
  linkClassName?: string;
  formats?: TFileFormat[];
}

export const CvList = ({ className, linkClassName, formats = ['doc', 'pdf', 'rtf'] }: IResumesListProps) => {
  const cvList = useMemo(() => CV_LIST.filter(({ format }) => formats.includes(format)), [formats]);
  return (
    <div className={classNames(styles.root, className)}>
      {cvList.map(({ pathFile, name }) => (
        <DownloadLink key={pathFile} pathFile={pathFile} text={name} linkClassName={linkClassName} />
      ))}
    </div>
  );
};

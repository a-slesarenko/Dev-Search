import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';
import { InfoItem, InfoItemProps } from 'components/InfoItem';
import {ReactComponent as IconCompany} from 'assets/icon-company.svg';
import {ReactComponent as IconLocation} from 'assets/icon-location.svg';
import {ReactComponent as IconTwitter} from 'assets/icon-twitter.svg';
import {ReactComponent as IconWebsite} from 'assets/icon-website.svg';

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitterUsername'> { }

export const UserInfo = ({ blog, company, location, twitterUsername }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation />,
      text: location,
    },
    {
      icon: <IconWebsite />,
      text: blog,
    },
    {
      icon: <IconTwitter />,
      text: twitterUsername,
    },
    {
      icon: <IconCompany />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {/* Берем индекс так как это статика, ничего динамически меняться не будет */}
      {items.map((item, index) => {
        return <InfoItem {...item} key={index} />
      })}
    </div>
  );
} 

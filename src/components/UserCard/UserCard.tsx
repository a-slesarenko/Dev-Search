import { UserStat } from 'components/UserStat';
import { LocalGithubUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import styles from './UserCard.module.scss';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle name={props.name} login={props.login} createdAt={props.createdAt}/>
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || "This profile has no bio"}
    </p>
    <UserStat publicRepositories={props.publicRepositories} followers={props.followers} following={props.following} />
    <UserInfo blog={props.blog} company={props.company} location={props.location} twitterUsername={props.twitterUsername} />
  </div>
);

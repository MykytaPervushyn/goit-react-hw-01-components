import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};

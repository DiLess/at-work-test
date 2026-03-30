import DropdownActions from "./DropdownActions";
import styles from "./UserCard.module.scss";

const UserCard = ({
  user,
  isArchived = false,
  onArchive,
  onRestore,
  onHide,
  classNameCard,
}) => {
  const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${user.username}`;

  return (
    <div className={`${styles.card} ${classNameCard}`}>
      <div
        className={`${styles.avatarwrpr}  ${isArchived ? styles.grayscale : ""}`}
      >
        <img src={avatarUrl} alt={user.username} className={styles.avatar} />
      </div>

      <div className={styles.content}>
        <div className={styles.bodycontent}>
          <div className={styles.wrpr}>
            <h3 className={styles.username}>{user.username}</h3>
            <DropdownActions
              userId={user.id}
              isArchived={isArchived}
              onArchive={onArchive}
              onRestore={onRestore}
              onHide={onHide}
              className={styles.dropDown}
            />
          </div>
          <p className={styles.company}>{user.company.name}</p>
        </div>
        <p className={styles.city}>{user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;

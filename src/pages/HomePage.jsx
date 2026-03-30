import { useUsers } from "../hooks/useUsers";
import useUserStore from "../store/userStore";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const { data: users, isLoading, isError, error } = useUsers();
  const { archivedIds, hiddenIds, archiveUser, restoreUser, hideUser } =
    useUserStore();

  if (isLoading) return <Loader />;
  if (isError) {
    return (
      <div className={styles.error}>
        <p>Ошибка загрузки данных: {error?.message || "Неизвестная ошибка"}</p>
        <button onClick={() => window.location.reload()}>
          Попробовать снова
        </button>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return <div className={styles.empty}>Нет данных для отображения</div>;
  }

  // Активные пользователи (не в архиве и не скрытые)
  const activeUsers = users.filter(
    (user) => !hiddenIds.includes(user.id) && !archivedIds.includes(user.id),
  );

  // Архивные пользователи
  const archivedUsers = users.filter((user) => archivedIds.includes(user.id));

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Активные</h2>
        <div className={styles.usersGrid}>
          {activeUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onArchive={() => archiveUser(user.id)}
              onHide={() => hideUser(user.id)}
            />
          ))}
        </div>
      </section>

      {archivedUsers.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Архив</h2>
          <div className={styles.usersGrid}>
            {archivedUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isArchived={true}
                onRestore={() => restoreUser(user.id)}
                classNameCard={styles.archivedUser}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import UserForm from "../components/UserForm";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import Backarrow from "../components/icons/Backarrow";
import styles from "./EditPage.module.scss";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Loader />;

  const user = users?.find((u) => u.id === parseInt(id));

  if (!user)
    return <div className={styles.notFound}>Пользователь не найден</div>;

  const handleSave = (data) => {
    console.log("Сохранённые данные:", data);
    setShowToast(true);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=${user.username}`;

  return (
    <div className={styles.container}>
      <button
        onClick={() => navigate("/")}
        className={`${styles.backButton} headline`}
      >
        <Backarrow /> Назад
      </button>
      <div className={styles.wrpr}>
        <div className={styles.sideInfo}>
          <div className={styles.avatarWrpr}>
            <img src={avatarUrl} alt="" />
          </div>
          <div className={styles.categories}>
            <p className={`${styles.title} text2-semibold`}>Данные профиля</p>
            <p>Рабочее пространство</p>
            <p>Приватность</p>
            <p>Безопасность</p>
          </div>
        </div>
        <div className={styles.body}>
          <h2 className={`${styles.title} title`}>Данные профиля</h2>
          <UserForm user={user} onSubmit={handleSave} />
        </div>
      </div>

      {showToast && (
        <Toast
          message="Изменения сохранены!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default EditPage;

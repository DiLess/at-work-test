import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DropdownActions.module.scss";
import Dots from "./icons/Dots";

const DropdownActions = ({
  userId,
  isArchived = false,
  onArchive,
  onRestore,
  onHide,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (action) => {
    setIsOpen(false);

    if (action === "edit") return;
    if (action === "archive" && onArchive) onArchive();
    if (action === "restore" && onRestore) onRestore();
    if (action === "hide" && onHide) onHide();
  };

  return (
    <div className={`${styles.dropdown} ${className}`} ref={dropdownRef}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Действия"
      >
        <Dots />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <Link
            to={`/edit/${userId}`}
            className={styles.dropdownItem}
            onClick={() => handleAction("edit")}
          >
            Редактировать
          </Link>

          {isArchived ? (
            <button
              className={styles.dropdownItem}
              onClick={() => handleAction("restore")}
            >
              Активировать
            </button>
          ) : (
            <>
              <button
                className={styles.dropdownItem}
                onClick={() => handleAction("archive")}
              >
                Архивировать
              </button>
              <button
                className={styles.dropdownItem}
                onClick={() => handleAction("hide")}
              >
                Скрыть
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownActions;

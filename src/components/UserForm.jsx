import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '../utils/validation';
import Input from './Input';
import Button from './Button';
import styles from './UserForm.module.scss';

const UserForm = ({ user, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: user?.name || '',
      username: user?.username || '',
      email: user?.email || '',
      city: user?.address?.city || '',
      phone: user?.phone || '',
      companyName: user?.company?.name || ''
    }
  });
  
  // Фильтруем телефон, оставляя только цифры
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    // Форматируем телефон для красивого отображения
    if (value.length > 0) {
      // Формат: 8 (999) 111-22-33
      if (value.length <= 1) {
        value = `8 (${value}`;
      } else if (value.length <= 4) {
        value = `8 (${value.slice(0, 3)}`;
      } else if (value.length <= 7) {
        value = `8 (${value.slice(0, 3)}) ${value.slice(3)}`;
      } else if (value.length <= 9) {
        value = `8 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
      } else {
        value = `8 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 8)}-${value.slice(8, 10)}`;
      }
    }
    e.target.value = value;
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        label="Имя"
        {...register('name')}
        error={errors.name?.message}
        placeholder="Введите имя"
      />
      
      <Input
        label="Никнейм"
        {...register('username')}
        error={errors.username?.message}
        placeholder="Введите никнейм"
      />
      
      <Input
        label="Почта"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        placeholder="example@mail.ru"
      />
      
      <Input
        label="Город"
        {...register('city')}
        error={errors.city?.message}
        placeholder="Введите город"
      />
      
      <Input
        label="Телефон"
        {...register('phone')}
        onChange={handlePhoneChange}
        error={errors.phone?.message}
        placeholder="8 (999) 111-22-33"
      />
      
      <Input
        label="Название компании"
        {...register('companyName')}
        error={errors.companyName?.message}
        placeholder="Введите название компании"
      />
      
      <Button type="submit">
        Сохранить
      </Button>
    </form>
  );
};

export default UserForm;
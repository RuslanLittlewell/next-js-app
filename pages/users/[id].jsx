import { useRouter } from "next/router";
import { Text } from '@chakra-ui/react'
import Navigation from "next-components/Navigation";
import style from 'styles/user.module.scss';

export default function ({ user }) {
  const router = useRouter();
  return (
    <div>
      <Navigation />

      <div className="user-id">Пользователь c id: {router.query.id}</div>
       <div className={style.userData}>
        <div className={style.userData__labels}>
          <Text fontSize='3xl' className="user-data__labels--title">Имя</Text>
          <Text fontSize='3xl' className="user-data__labels--title">Телефон</Text>
          <Text fontSize='3xl' className="user-data__labels--title">Почта</Text>
          <Text fontSize='3xl' className="user-data__labels--title">Адресс</Text>
          <Text fontSize='3xl' className="user-data__labels--title">Компания</Text>
        </div>
        <div className={style.userData__infos}>
        <Text fontSize='md' className="user-data__labels--info">{user.name}</Text>
        <Text fontSize='md' className="user-data__labels--info">{user.phone}</Text>
        <Text fontSize='md' className="user-data__labels--info">{user.email}</Text>
        <Text fontSize='md' className="user-data__labels--info">{user.address.street} {user.address.suite}</Text>
        <Text fontSize='md' className="user-data__labels--info">{user.company.name}</Text>
        </div>
       </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await response.json();
  return {
    props: {
      user,
    },
  };
}

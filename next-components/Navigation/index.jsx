import A from '../Link'
import { useRouter } from "next/router"

export default function Navigation() {
  const { back } = useRouter();
  
  return  <nav>
      <A href="/" text="Главная" />
      <A href="/users" text="Пользователи"/>
      <A href="/settings" text="Настройки" />

      <button onClick={() => back()}>Назад</button>
      </nav>
}
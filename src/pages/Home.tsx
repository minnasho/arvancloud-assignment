import { useAppSelector } from "../app/store/hooks"

export function Home() {
  const { username } = useAppSelector((state) => state.authData)
  return <div>{username}</div>
}

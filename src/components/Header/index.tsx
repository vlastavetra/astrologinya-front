import Link from "next/link"
import { useRouter } from "next/router"
import s from "./styles.module.scss"

const categories = [
  "Clothes and shoes",
  "Accessories",
  "Decorations",
  "Entertainment",
  "Home and life",
  "Children",
  "Food",
  "Vintage",
]

export default function Header() {
  const router = useRouter()
  const page = router.pathname.substring(1)
  const { slug } = router.query
  return (
    <header className={s["main-header"]}>
      <Link href="/" className={s["main-header-logo"]}>ASTROLOGINYA</Link>
    </header>
  )
}

import { ReactNode } from "react";
import s from './layout.module.scss'

export default function Layout({ children }: { children: ReactNode}) {
	return <div className={s.wrapper}>{children}</div>
}
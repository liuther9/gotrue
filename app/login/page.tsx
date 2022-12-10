import Form from './Form'
import s from './page.module.scss'

export default function Page() {
	return (
		<div>
			<h1 className={s.h1}>Авторизация</h1>
			<Form />
		</div>
	)
}

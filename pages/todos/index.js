import styles from '../../styles/Todos.module.css'

import Link from 'next/link'

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()

    return {
        props: { todos }
    }
}

export default function Todos({ todos }) {
    return (
        <>
            <h1>Tarefas para fazer:</h1>
            <ul className={styles.todoList}>
                {todos.map(i => (
                    <li key={i.id}>
                        <Link href={`/todos/${i.id}`}><a>{i.title}</a></Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

const getTodo = () => {
  return prisma.todo.findMany();
};
export default async function Home() {
  async function toggleTodo(id: string, complete: boolean) {
    "use server";

    await prisma.todo.update({ where: { id }, data: { complete } });
  }
  // await prisma.todo.create({ data: { title: "testing", complete: false } });

  const todos = await getTodo();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>

      <ul className="p1-4">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />;
        })}
      </ul>
    </>
  );
}

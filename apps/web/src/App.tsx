import { Circle, CircleCheckBig } from 'lucide-react'

import { KanbanItem, type Task } from '@/components/kanban'
import { Accordion } from '@/components/ui/accordion'

function App() {
  const todoTasks: Task[] = [
    {
      // biome-ignore lint/nursery/useNumericSeparators: represents date
      id: 27062501,
      title: 'Lavar a louça',
      assigned: [
        { name: 'Davi Reis', color: 'purple' },
        { name: 'Emanuela Picanço', color: 'blue' },
      ],
      tags: [
        { title: 'Urgente', color: 'red' },
        { title: 'Urgente', color: 'red' },
      ],
    },
  ]

  const doneTasks: Task[] = [
    {
      // biome-ignore lint/nursery/useNumericSeparators: represents date
      id: 27062501,
      title: 'Lavar a louça',
      assigned: [
        { name: 'Davi Reis', color: 'purple' },
        { name: 'Emanuela Picanço', color: 'blue' },
      ],
      tags: [
        { title: 'Urgente', color: 'red' },
        { title: 'Urgente', color: 'red' },
      ],
    },
  ]

  return (
    <div className="grid min-h-screen place-items-center">
      <Accordion className="space-y-4" type="single">
        <KanbanItem Icon={Circle} tasks={todoTasks} title="Pendente" value="todo" />
        <KanbanItem Icon={CircleCheckBig} tasks={doneTasks} title="Feito" value="done" />
      </Accordion>
    </div>
  )
}

export default App

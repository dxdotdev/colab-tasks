import { Ellipsis, type LucideIcon, Milk, Plus } from 'lucide-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type User = {
  name: string
}

type Tag = {
  title: string
}

export type Task = {
  id: number
  title: string
  tags: [Tag?, Tag?]
  assigned: User[]
}

type Props = {
  // biome-ignore lint/style/useNamingConvention: React component
  Icon: LucideIcon
  title: string
  tasks: Task[]
  value: string
}

function KanbanTask({ task }: { task: Task }) {
  return (
    <div className="space-y-2 rounded-lg bg-card p-4">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">#{task.id}</span>

        <div className="-space-x-3 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-card">
          {task.assigned.map((user) => (
            <Avatar className="size-7" key={user.name}>
              <AvatarFallback className="text-xs">
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>

      <span className="flex items-center gap-1">
        <Milk className="text-muted-foreground" size="20" />
        {task.title}
      </span>

      <div className="mt-4 flex gap-1">
        {task.tags.map((tag) => (
          <Badge key={tag?.title}>{tag?.title}</Badge>
        ))}

        {
          // Future
          // <Badge className="ml-auto flex items-center" variant="secondary">
          //   <Clock /> 13:30
          // </Badge>
        }
      </div>
    </div>
  )
}

export function KanbanItem({ Icon, title, tasks, value }: Props) {
  const quantity = tasks.length

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div>
          <Icon size="20" />
          {title}
          <span className="text-muted-foreground">{quantity}</span>
        </div>

        <div>
          <Ellipsis size="18" />
          <Plus size="18" />
        </div>
      </AccordionTrigger>

      <AccordionContent className="flex flex-col gap-2">
        {tasks.map((task) => (
          <KanbanTask key={task.id} task={task} />
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

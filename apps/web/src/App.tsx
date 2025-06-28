import { Circle, Ellipsis, Milk, Plus } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              <Circle size="20" />
              Para fazer
              <span className="text-muted-foreground">2</span>
            </div>

            <div>
              <Ellipsis size="18" />
              <Plus size="18" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 rounded-lg bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">#27062501</span>

                <Avatar className="size-7">
                  <AvatarFallback className="text-xs">DR</AvatarFallback>
                </Avatar>
              </div>

              <span className="flex items-center gap-1">
                <Milk className="text-muted-foreground" size="20" /> Lavar Louça
              </span>

              <div className="mt-4 flex gap-1">
                <Badge color="blue">Diário</Badge>
                <Badge color="red">Urgente</Badge>
                <Badge className="ml-auto" variant="outline">
                  13:30
                </Badge>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App

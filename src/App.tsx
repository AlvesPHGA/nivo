import { FileDown, Plus, Search } from 'lucide-react';
import { Header } from './components/global/Header/Header';
import { Tabs } from './components/Tabs/Tabs';
import { Button } from './components/ui/Button';
import { Control, Input } from './components/ui/Input';

export function App() {
   return (
      <div className="py-10 space-y-8">
         <div>
            <Header />
            <Tabs />
         </div>
         <main className="max-w-6xl mx-auto space-y-5">
            <div className="flex items-center gap-3">
               <h1 className="text-xl font-bold">Tags</h1>
               <Button variant="primary">
                  <Plus className="size-3" />
                  Create new
               </Button>
            </div>

            <div className="flex items-center justify-between">
               <Input variant="filter">
                  <Search className="size-3" />
                  <Control placeholder="Search tags..." />
               </Input>

               <Button>
                  <FileDown className="siz-3" />
                  Export
               </Button>
            </div>
         </main>
      </div>
   );
}

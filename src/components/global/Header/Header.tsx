import { ChevronDown } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import nivoLogo from '../../../assets/logo-nivo.svg';

export function Header() {
   return (
      <header className="max-w-[1200px] mx-auto flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
               <img src={nivoLogo} alt="Nivo.video" />
               <Badge>Beta</Badge>
            </div>
            <svg
               width="6"
               height="16"
               viewBox="0 0 6 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <line
                  x1="1.18372"
                  y1="15.598"
                  x2="5.32483"
                  y2="0.143194"
                  className="stroke-zinc-700"
               />
            </svg>

            <div className="flex items-center gap-2.5">
               <img
                  src="https://github.com/rocketseat.png"
                  className="size-5 rounded-full"
                  alt=""
               />

               <span className="text-sm font-medium text-zinc-100">
                  Rocketseat
               </span>
               <Badge variant="primary">PRO</Badge>
               <ChevronDown className="text-zinc-600 size-4" />
            </div>

            <svg
               width="6"
               height="16"
               viewBox="0 0 6 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <line
                  x1="1.18372"
                  y1="15.598"
                  x2="5.32483"
                  y2="0.143194"
                  className="stroke-zinc-700"
               />
            </svg>

            <div className="flex items-center gap-2.5">
               <span className="text-sm font-medium text-zinc-100">Ignite</span>
               <ChevronDown className="text-zinc-600 size-4" />
            </div>

            <div className="flex items-center gap-3">
               <div className="flex flex-col items-end gap-0.5">
                  <span className="text-sm font-medium">Pedro H.</span>
                  <span className="text-xs text-zinc-400">
                     alvesphga@gmail.com
                  </span>
               </div>

               <img
                  src="https://avatars.githubusercontent.com/u/35383608?v=4"
                  alt=""
                  className="size-8 rounded-full"
               />
               <ChevronDown className="size-4 text-zinc-600" />
            </div>
         </div>
      </header>
   );
}

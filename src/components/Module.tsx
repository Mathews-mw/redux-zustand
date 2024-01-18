import * as Collapsible from '@radix-ui/react-collapsible';

import { Lesson } from './Lesson';

import { ChevronDown } from 'lucide-react';

interface IModuleProps {
	moduleIndex: number;
	title: string;
	lessonsAmount: number;
}

export function Module({ moduleIndex, title, lessonsAmount }: IModuleProps) {
	return (
		<Collapsible.Root className='group'>
			<Collapsible.Trigger className='flex w-full items-center gap-3 bg-zinc-800 p-4 hover:bg-zinc-800/60'>
				<div className='flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs'>
					{moduleIndex + 1}
				</div>

				<div className='flex flex-col gap-1 text-left'>
					<strong className='text-sm'>{title}</strong>
					<span className='text-xs text-zinc-400'>{lessonsAmount} aulas</span>
				</div>

				<ChevronDown className='w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform' />
			</Collapsible.Trigger>

			<Collapsible.Content>
				<nav className='relative flex flex-col gap-4 p-6'>
					<Lesson title='Fundamentos do Redux' duration='09:15' />
					<Lesson title='Entendo o Store' duration='07:25' />
					<Lesson title='Reducers e Dispatchers' duration='12:43' />
				</nav>
			</Collapsible.Content>
		</Collapsible.Root>
	);
}

import { Loader } from 'lucide-react';
import ReactPlayer from 'react-player';
import { useCurrentLesson, useStore } from '../zustand-store';

export function VideoPlayer() {
	const { currentLesson } = useCurrentLesson();
	const { isLoading, next } = useStore((state) => {
		return {
			isLoading: state.isLoading,
			next: state.next,
		};
	});

	function handleNext() {
		next();
	}

	return (
		<div className='w-full bg-zinc-950 aspect-video'>
			{isLoading ? (
				<div className='flex w-full h-full justify-center items-center'>
					<Loader className='w-6 h-6 text-zinc-400 animate-spin' />
				</div>
			) : (
				<ReactPlayer
					width='100%'
					height='100%'
					controls
					playing
					onEnded={handleNext}
					url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
				/>
			)}
		</div>
	);
}

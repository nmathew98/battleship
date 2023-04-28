import { PlayerCardScore, PlayerCardScoreProps } from "./Score";

export const PlayerCard = ({
	type = "local",
	className = "bg-amber-500",
	label,
}: PlayerCardProps) => (
	<div
		className={`flex w-full flex-col items-center justify-items-center space-y-2 px-4 py-2 md:aspect-[4/3] md:space-y-4 md:py-8 ${className}`}>
		<PlayerCardScore type={type} />
		<div className="h-[0.8px] w-full bg-[#4a4a4a] md:w-3/4" />
		<span className="text-center text-xs font-bold text-[#4a4a4a] md:text-2xl">
			{label}
		</span>
	</div>
);

export interface PlayerCardProps {
	label: string;
	type?: PlayerCardScoreProps["type"];
	className?: string;
}

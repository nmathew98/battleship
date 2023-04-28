import { PlayerCardScore, PlayerCardScoreProps } from "./Score";

export const PlayerCard = ({
	type = "local",
	className = "bg-amber-500",
	label,
}: PlayerCardProps) => (
	<div
		className={`flex w-full flex-col items-center justify-items-center space-y-4 px-4 py-8 ${className}`}>
		<span className="text-center text-4xl font-bold text-[#4a4a4a]">
			<PlayerCardScore type={type} />
		</span>
		<div className="h-[0.8px] w-3/4 bg-[#4a4a4a]" />
		<span className="text-center font-bold text-[#4a4a4a]">{label}</span>
	</div>
);

export interface PlayerCardProps {
	label: string;
	type?: PlayerCardScoreProps["type"];
	className?: string;
}

export const DEFAULT_BREAKPOINTS = {
	Mobile: Symbol("mobile"),
	Desktop: Symbol("desktop"),
};

const DEFAULT_MEDIA_QUERIES = {
	"(max-width: 640px)": DEFAULT_BREAKPOINTS.Mobile,
	"(min-width: 640px)": DEFAULT_BREAKPOINTS.Desktop,
};

export const useScreenBreakpoint = (
	mediaQueries: MediaQueries = DEFAULT_MEDIA_QUERIES,
) => {
	const determineBreakpoint = () => {
		for (const [query, breakpoint] of Object.entries(mediaQueries))
			if (window.matchMedia(query).matches) return breakpoint;
	};

	const [currentBreakpoint, setCurrentBreakpoint] = useState(
		determineBreakpoint(),
	);

	window.addEventListener("resize", () => {
		setCurrentBreakpoint(determineBreakpoint());
	});

	return {
		currentBreakpoint,
	};
};

export interface MediaQueries {
	[key: string]: Symbol;
}

import { ReactNode } from "react";

interface LayoutProps {
	children?: ReactNode | undefined;
	className?: string;
	star: Star;
}

class Star {
	x: number;
	y: number;
	z: number;
	radius: number;
	size: number;
	opacity: number;
	constructor() {
		this.x = Number(Number(Math.random() * 100).toFixed(2)); // x coordinate
		this.y = Number(Number(Math.random() * 100).toFixed(2)); // y coordinate
		this.z = Number(Number(Math.random() * 100).toFixed(2)); // distance
		this.radius = Number(Number(Math.random() * 6).toFixed(2));
		this.size = Math.PI * Math.pow(this.radius, 2);
		this.opacity = (this.z * this.size) / 10000;
	}

	style = function (): object {
		return {
			right: this.x + "%",
			bottom: this.y + "%",
			opacity: this.opacity,
			width: this.radius,
			height: this.radius,
		};
	};
}
// TODO: recompute it with getStaticProps
// TODO: add interactivity
const stars = Array.from({ length: 500 }, (_, i) => i).map(() => new Star());

const StarComponent = function (props: LayoutProps) {
	return (
		<div
			className={" bg-font rounded-full absolute w-full h-full margin-0"}
			style={props.star.style()}
		></div>
	);
};

const BackgroundContainer = function () {
	return (
		<div className="">
			<div className="absolute w-full h-full bg-background -z-50">
				{stars.map((elem, idx) => (
					<StarComponent key={`star${idx}`} star={elem} />
				))}
			</div>
		</div>
	);
};

export default BackgroundContainer;

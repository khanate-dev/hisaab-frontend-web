//@ts-check
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = (color, variant, width, height,) => makeStyles(theme => ({
	logo: {
		width: width,
		height: height,
		'& path': {
			fill: (
				theme.palette?.[color]?.[variant ?? 'main']
					? theme.palette?.[color]?.[variant ?? 'main']
					: 'url(#gradient)'
			),
		},
	},
	gradientStart: {
		stopColor: theme.palette.primary.main,
	},
	gradientEnd: {
		stopColor: theme.palette.primary.light,
	},
}));

/**
 * @param {object} props
 * @param {('primary'|'secondary'|'background')} [props.color] - the logo's color
 * @param {('main'|'light'|'dark'|'default'|'opposite')} [props.variant] - the logo's color variant (default and opposite are for color type 'background')
 * @param {(number|string)} [props.width] - the logo's width
 * @param {(number|string)} [props.height] - the logo's height
 */
const Logo = ({ color, variant, width, height, }) => {

	const classes = useStyles(color, variant, width, height)();

	return (
		<svg
			viewBox='0 0 9828.33 9399.76'
			className={classes.logo}
		>
			<linearGradient id='gradient'>
				<stop offset='0%' className={classes.gradientStart} />
				<stop offset='100%' className={classes.gradientEnd} />
			</linearGradient>
			<path
				d='M2183.47 5198.33l1163.37-1163.34h816.64v816.64L3000.11 6014.97l-816.64-816.64zM4914.15 559.68c318.93 0 577.5 258.54 577.5 577.47s-258.57 577.47-577.5 577.47c-318.9 0-577.47-258.54-577.47-577.47s258.57-577.47 577.47-577.47zm0 5449.26c318.93 0 577.5-258.54 577.5-577.47s-258.57-577.5-577.5-577.5c-318.9 0-577.47 258.57-577.47 577.5s258.57 577.47 577.47 577.47zM1629.86 2706.86h2533.63v1154.91H1629.86V2706.86zM4336.72 1661.4v-44.63c137.72 165.62 345.29 271.08 577.44 271.08 232.18 0 439.75-105.47 577.47-271.08v3335.09c-137.72-165.62-345.29-271.08-577.47-271.08-232.15 0-439.72 105.47-577.44 271.08V1661.4zm1328.13 1045.46h2533.63v1154.91H5664.85V2706.86zm-173.23 3204.19v657.57H4336.71v-657.57c137.72 165.62 345.29 271.12 577.44 271.12 232.18 0 439.75-105.5 577.47-271.12zM4336.71 657.54V0h1154.91v657.54c-137.72-165.62-345.29-271.08-577.47-271.08-232.15 0-439.72 105.47-577.44 271.08zm-989.87 1876.09L2183.47 1370.26l816.64-816.64 1163.37 1163.37v816.64h-816.64zm2318-816.64L6828.21 553.62l816.64 816.64-1163.37 1163.37h-816.64v-816.64zm816.64 2318l1163.37 1163.34-816.64 816.64-1163.37-1163.34v-816.64h816.64z'
			/>
			<path
				d='M0 9373.47v-255.01l187.97-39.45V7859.6L0 7819.7v-256.28h811.67v256.28l-187.52 39.9v457.37h658.91V7859.6l-187.93-39.9v-256.28h810.37v256.28l-187.52 39.9v1219.41l187.52 39.45v255.01h-810.37v-255.01l187.93-39.45v-427.69H624.15v427.69l187.52 39.45v255.01H0zm2005.21 0v-255.01l187.97-39.45V7859.6l-187.97-39.9v-256.28h810.37v256.28l-187.49 39.9v1219.41l187.49 39.45v255.01h-810.37zm1701.84 26.29c-147.25-.41-278.35-14.4-392.49-42.4-114.55-28.45-228.27-81.47-341.96-159.14v-470.09h336.86l37.36 241.4c26.29 29.72 73.38 54.74 140.43 75.1 67.04 20.36 140.46 30.57 219.81 30.57 55.56 0 102.24-6.82 139.57-20.39 36.91-13.98 65.36-33.93 84.45-60.67 19.09-26.29 28.41-58.13 28.41-95.46 0-35.65-8.91-67.45-26.73-95.9-17.82-28-47.09-54.74-87.4-80.17-40.72-25.06-95.46-50.93-164.21-77.67-154.86-49.63-282.15-100.12-381.86-151.46-99.26-51.34-173.09-112.42-221.45-182.86-48.81-70.44-73.01-157.84-73.01-262.24 0-100.12 28.86-187.97 85.72-263.06 57.27-74.65 136.21-134.05 236.33-176.93 100.12-43.26 215.11-65.74 344.09-68.31 147.66-3.39 278.35 11.48 391.63 44.15 113.73 32.66 213.84 82.29 300.83 148.48v436.19h-322.91l-51.31-242.26c-28-14.02-68.31-27.18-120.51-38.63-52.2-11.45-107.76-17.38-166.34-17.38-50.49 0-95.46 6.79-134.91 19.91-39.45 13.16-70.44 33.11-93.37 59.84-22.9 26.29-33.93 59.4-33.93 99.3 0 32.22 9.36 61.08 28.45 86.1 19.09 25.47 52.61 50.93 100.53 75.95 47.95 25.47 115.4 54.74 201.54 87.85 205.38 60.26 361.5 136.18 467.99 226.56 106.53 90.8 159.55 214.29 159.55 370 0 106.9-28.86 197.7-86.99 272.8-58.13 75.1-138.75 132.41-242.26 171.41-103.55 39.49-224.02 58.99-361.91 59.4zm768.38-26.29v-255.01l126.89-18.65 539.7-1536.39h472.24l540.52 1536.39 126.89 18.65v255.01h-676.32v-255.01l118.35-22.04-54.7-196.47h-581.72l-52.2 196.47 117.98 22.04v255.01h-677.62zm703.91-779.42h396.29l-176.52-548.2-19.91-63.2h-7.23l-21.22 69.58-171.41 541.82zm1159.6 779.42v-255.01l126.89-18.65 539.7-1536.39h472.24l540.52 1536.39 126.89 18.65v255.01h-676.32v-255.01l118.35-22.04-54.7-196.47h-581.72l-52.2 196.47 117.98 22.04v255.01h-677.62zm703.91-779.42h396.29l-176.52-548.2-19.91-63.2h-7.23l-21.22 69.58-171.41 541.82zm1180.82 779.42v-255.01l187.97-39.45V7859.6l-187.97-39.9v-256.28h819.29c227.86 0 405.65 42.02 533.36 125.58 127.71 83.6 191.36 208.33 191.36 374.25 0 85.28-20.39 161.64-61.11 229.54-40.31 67.45-103.1 118.35-187.55 153.18 72.15 16.11 131.14 42.84 176.52 80.17 45.41 37.77 78.94 83.6 100.56 137.07 21.63 53.44 32.25 111.15 32.25 173.09 0 177.37-58.99 311.43-177.79 401.81-118.39 90.38-290.21 135.35-515.53 135.35h-911.35zm624.15-331.78h287.19c86.13 0 151.05-17 194.34-50.93 43.7-33.93 65.33-85.69 65.33-155.71 0-52.2-8.47-95.46-25.02-129.83-16.55-34.38-41.99-59.81-76.81-76.81-34.79-16.97-80.62-25.43-136.62-25.43h-308.41v438.72zm0-727.25h176.48c102.65 0 179.47-16.55 230.36-49.22 51.34-32.66 76.81-83.6 76.81-152.32 0-75.1-24.2-130.25-71.7-164.62-47.54-34.38-120.07-51.34-216.83-51.34h-195.13v417.51z'
			/>
		</svg>
	);
};

Logo.propTypes = {
	color: PropTypes.oneOf(['primary', 'secondary', 'background']),
	variant: PropTypes.oneOf(['main', 'light', 'dark', 'default', 'opposite']),
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Logo;
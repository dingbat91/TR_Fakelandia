// Creates random image via randomiseation of width and height parameters
export const RandomImage = () => {
	const width = Math.floor(Math.random() * (10 - 8 + 1) + 8) * 10;
	const height = Math.floor(Math.random() * (10 - 8 + 1) + 8) * 10;
	const url = `http://picsum.photos/${width}/${height}/`;
	return url;
};

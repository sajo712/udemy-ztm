// First challange - Clean room
const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const clean = (array) => {
  // Create an empty array to fill
  const answer = [];

	// Sort the dirty array
	let cleanArray = array.sort((a, b) => a - b);
		let sameNum = [];
	// Iterate the array and filter for groups
	let i = 0;
	while (i < cleanArray.length) {
		sameNum = cleanArray.filter(num => num === cleanArray[i]);
		if (sameNum.length > 1) {
			answer.push(sameNum);
		} else answer.push(sameNum[0]);
		i = i + sameNum.length;
	};
	return answer;
};

clean(input);

//Challange #3 - Hex <=> RGB

const sanitizeHex = (color) => {
	color = color.toString().toLowerCase();
	if (color.charAt(0) === "#") {
		color = color.slice(1);
	}
	return color;
}

const sanitizeRGB = (color) => {
  return color.match(/\d+/g);
}

const isHex = (color) => {
	color = sanitizeHex(color);
	// All hex characters?
	if (color.length === 6 && color.match(/[abcdef0123456789]/g).length === 6) {
		return true;
	}
	return false;
}

const isRGB = (color) => {
  color = sanitizeRGB(color);
  if (color !== null && color.length === 3) {
    const colors = color.filter(num => (num >=0 && num <= 255));
    if (colors.length === 3) {
      return true;
    }
  }
	return false;
}

const converter = (color) => {
	if (isHex(color)) {
		color = sanitizeHex(color);
		const Red = parseInt(color.slice(0,2),16);
		const Green = parseInt(color.slice(2,4),16);
		const Blue = parseInt(color.slice(4,6),16);
		return `rgb(${Red}, ${Green}, ${Blue})`;
	} else if (isRGB(color)) {
    color = sanitizeRGB(color);
    const Red = parseInt(color[0]).toString(16);
		const Green = parseInt(color[1]).toString(16);
		const Blue = parseInt(color[2]).toString(16);
    return `#${Red}${Green}${Blue}`;
	} else {
		console.log("That is not a proper color!");
	}
}

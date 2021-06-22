let alreadyTested = false;
let passiveSupported = false;

const isSupported = () => {
	if (alreadyTested) return passiveSupported;
	alreadyTested = true;

	// Test via a getter in the options object to see if the passive property is accessed
	
};

const passiveEvent = () => {
	return isSupported() ? { passive: true } : false;
};

export { passiveEvent };
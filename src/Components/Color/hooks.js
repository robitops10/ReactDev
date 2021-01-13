// Custom hooks

import { useState } from "react";

const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);

	return [
		{ value, onChange: e => setValue(e.target.value) }, 			// Must be Object, so that can be use as property
		() => setValue(initialValue) 															// Reset the setVajue as default.
	];
};

export useInput;

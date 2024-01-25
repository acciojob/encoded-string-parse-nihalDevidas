const parseCode = (str) => {
  // your code here
	let arr = str.split("0").filter((st)=>st.length !== 0)

	let obj = {
		firstName : arr[0],
		lastName : arr[1],
		id : arr[2]
	}
	return obj
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

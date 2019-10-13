function hasSpaces(str) {
	for (i = 0; i < str.length; i++){
		if (str[i] = " "){
			return true
		} 
	}
} return false

function hasSpaces(str) {
	if(str.includes(' ')) {
		return true
    } else {
        return false
    }
}

function hasSpaces(str) {
	return str.includes(' ')
}

const hasSpaces = str => str.includes(" ")

let hasSpaces = (str) => str.split(" ").length > 1

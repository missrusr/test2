let fs = require('fs');
let path = require('path');
let	readFilePromise = function (fileName) {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, (err, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data.toString())
			}
		})
	})
}

// this is my first github Item
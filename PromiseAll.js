function customPromiseAll(promises)
{
	return new Promise(function(resolve, reject) {

		let res = [];
		
		if(promises.length === 0) {
			resolve(res);
		}

		let resolved = 0;

		let isResolved = (promiseRes) => {
			resolved++;
			res.push(promiseRes);

			if(resolved === promises.length) {
				resolve(res);
			}
		};

		for(let i = 0; i < promises.length; i++) {
			promises[i].then(isResolved, reject);
		}

	});
}

customPromiseAll([
		new Promise((resolve, rej) => { resolve('1'); }),
		new Promise((resolve, rej) => { setTimeout(() => {rej('2 ')}, 1000) }),
		new Promise((resolve, rej) => { resolve('3'); }),
		new Promise((resolve, rej) => { setTimeout(() => {resolve('4 ')}, 2000) })

	]).then(
		(resolved) => {console.log(resolved)},
		(rejected) => {console.log(rejected + "promise rejected!")}
	);


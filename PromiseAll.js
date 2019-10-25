function customPromiseAll(promises)
{
	return new Promise(function(resolve, reject) {

		let resolved = 0;

		let isResolved = () => {
			if(resolved === promises.length) {
				resolve(resolved);
			}
		};

		for(let i = 0; i < promises.length; i++) {
			promises[i].finally(() => {
				resolved++;  
				isResolved();
		 	});
		}

	});
}

customPromiseAll([
		new Promise((resolve, rej) => { resolve('1'); }).then((result) => {alert(result + ' alert');}),
		new Promise((resolve, rej) => { setTimeout(() => {resolve('2 ')}, 1000) }).then((result) => {alert(result + ' alert');}),
		new Promise((resolve, rej) => { resolve('3'); }).then((result) => {alert(result + ' alert');}),
		new Promise((resolve, rej) => { setTimeout(() => {resolve('4 ')}, 2000) }).then((result) => {alert(result + ' alert');})

]).then((resolved) => {alert(resolved + ' promises resolved!')});


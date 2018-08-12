// 包含了所有node程序运行时的参数值：
console.log(process.argv)

//输出 array array[0]始终是node  array[1]始终是执行的文件路径

//要获取这些真正的元素，需要首先将数组的前两个元素去除掉
console.log(process.argv.slice(2))

// __dirname 获取执行文件时该文件在文件系统中所在目录

// 获取当前工作目录，调用process.cwd方法：
console.log(process.cwd())

// process.chdir方法，允许灵活的更改工作目录
console.log(process.chdir('/'))
console.log(process.cwd())

// 
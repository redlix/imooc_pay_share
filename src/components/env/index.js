const envList = {
    dev: {
        baseUrl: ''
    },
    test: {
        baseUrl: ''
    },
    prod: {
        dimain: 'http://iredred.cn',
        baseUrl: ''
    },
}

// 每次手动修改项目环境变量
let currentEnv = 'prod';

// 根据当前浏览器动态设置环境变量
let params = {
    'dev-iredred.cn': 'dev',
    'test-iredred.cn': 'test',
    'iredred.cn': 'prod',
}

currentEnv = params[location.hostname]

export default envList[currentEnv];
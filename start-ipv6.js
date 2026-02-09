#!/usr/bin/env node
// start-ipv6.js

// 设置 IPv6 环境变量
process.env.USE_IPV6_ONLY = 'true';

// 启动主应用
require('./index.js');

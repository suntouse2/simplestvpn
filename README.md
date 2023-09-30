# SimplestVPN - Chrome Proxy Extension

A simple chromium extension that will allow you to simply connect to your SOX5 proxy server.

![image](https://github.com/suntouse2/simplestvpn/assets/142033928/22b3a249-fb42-4800-9b10-edf38384ec05)

# Install
Download the [last version](https://github.com/suntouse2/simplestvpn/releases/tag/release) of extension. 
Extract downloaded ZIP-archive, open your Chrome Extensions go to the devMode and add extracted folder.

# Configuration

edit *`proxyServerConfig`* in your `main.js` to change your proxy *`IP:PORT`*

# main.js
```javascript
const proxyServerConfig = {
	host: '1.1.1.1', //YOUR SOCKS5 PROXY IP
	port: 1080, //YOUR SOCKS5 PROXY PORT
}
```

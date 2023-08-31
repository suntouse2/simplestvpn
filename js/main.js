const connectBtn = document.getElementById('connect') // connectButton
const statusText = document.getElementById('status') // Status text span

if (localStorage.getItem('connectionStatus') == null) {
	localStorage.setItem('connectionStatus', 0)
}

let connectionStatus = localStorage.getItem('connectionStatus')

const proxyServerConfig = {
	host: '1.1.1.1', //YOUR SOCKS5 PROXY IP
	port: 1080, //YOUR SOCKS5 PROXY PORT
}
function setStatus(status) {
	switch (status) {
		case 'connection':
			connectBtn.disabled = true
			statusText.innerText = 'Connection...'
			statusText.style.color = 'black'
			break
		case 'disconnection':
			connectBtn.disabled = true
			statusText.innerText = 'Disconnection...'
			statusText.style.color = 'black'
			break
		case 'connected':
			connectBtn.disabled = false
			statusText.innerText = 'Connected'
			statusText.style.color = 'green'
			localStorage.setItem('connectionStatus', 1)
			break
		case 'disconnected':
			connectBtn.disabled = false
			statusText.innerText = 'Disconnected'
			statusText.style.color = 'red'
			localStorage.setItem('connectionStatus', 0)
			break
		default:
			break
	}
}
if (localStorage.getItem('connectionStatus') == 1) {
	setStatus('connected')
} else {
	setStatus('disconnected')
}
function connect() {
	if (localStorage.getItem('connectionStatus') == 0) {
		setStatus('connection')
		var config = {
			mode: 'fixed_servers',
			rules: {
				singleProxy: {
					scheme: 'socks5',
					host: proxyServerConfig.host,
					port: proxyServerConfig.port,
				},
			},
		}
		chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {
			setStatus('connected')
		})
	} else {
		setStatus('disconnection')
		chrome.proxy.settings.set(
			{ value: { mode: 'direct' }, scope: 'regular' },
			function () {
				setStatus('disconnected')
			}
		)
	}
}

connectBtn.addEventListener('click', connect)

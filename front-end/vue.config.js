const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: 'http://localhost:8000',
    
    // 👇 Keep server HTTP only (Codespaces handles HTTPS externally)
    server: 'http',

    client: {
      webSocketURL: {
        // 👇 Use secure WebSocket for the browser (since proxy is HTTPS)
        protocol: 'wss',
        hostname: 'urban-invention-vr5vx6pr753p779-8080.app.github.dev',
        port: 443,
      },
    },
    allowedHosts: 'all', // allow proxy hostnames like *.github.dev
  },
})
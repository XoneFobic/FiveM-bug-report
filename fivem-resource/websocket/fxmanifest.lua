fx_version 'cerulean'
games { 'gta5' }

author 'XoneFobic <xonefobic@gmail.com>'
description 'Websocket communication resource'
version '0.0.1'

dependencies {
  'yarn',
  'webpack'
}

client_script {
  'dist/client/client.js'
}

server_script {
  'dist/server/server.js'
}

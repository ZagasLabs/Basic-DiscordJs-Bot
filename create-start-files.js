const fs = require('fs');

// Código para crear archivos
fs.writeFileSync('config.json', `{\n    "clientId": "",\n    "test_guildId": ""\n}`);
fs.writeFileSync('.env', 'BOT_TOKEN=');
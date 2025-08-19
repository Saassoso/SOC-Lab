import makeWASocket, { useSingleFileAuthState, fetchLatestBaileysVersion } from '@adiwajshing/baileys';
const { state, saveState } = useSingleFileAuthState('./auth_info.json');

async function start() {
    const { version } = await fetchLatestBaileysVersion();
    const sock = makeWASocket({
        version,
        auth: state
    });

    sock.ev.on('creds.update', saveState);

    // Send a message
    const groupID = 'security-update-grp';
    await sock.sendMessage(groupID, { text: 'Wazuh-Alert' });
}

start();


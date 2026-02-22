// 引入 sql.js 和 crypto-js 库

let db;

document.getElementById('processBtn').addEventListener('click', processFile);

async function processFile() {
    const file = document.getElementById('fileInput').files[0];
    if (!file) {
        alert("请选择一个文件！");
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (e) {
        // 加载并解密数据库
        const fileData = e.target.result;
        await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.7.0/${file}` })
            .then(SQL => {
                db = new SQL.Database(new Uint8Array(fileData));
                // 这里需要你提供解密的密钥
                const key = 'your-32-byte-hex-key';  // 示例密钥
                const decryptedDb = decryptDatabase(db, key);
                const chats = extractChats(decryptedDb);
                displayChats(chats);
            });
    };

    reader.readAsArrayBuffer(file);
}

// 解密数据库
function decryptDatabase(db, key) {
    const aesKey = CryptoJS.enc.Hex.parse(key);
    // 这里用 AES 解密数据库文件，你可以在此根据实际需要使用解密逻辑
    // 注意：为了简化，此处代码并不完整，你需要根据实际数据进行调整。
    return db;
}

// 提取聊天记录
function extractChats(decryptedDb) {
    const query = "SELECT message, createTime, talker FROM message";
    const res = decryptedDb.exec(query);
    const chats = res[0].values.map(row => {
        return {
            message: row[0],
            time: row[1],
            sender: row[2],
        };
    });
    return chats;
}

// 展示聊天记录
function displayChats(chats) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';  // 清空结果区
    chats.forEach(chat => {
        resultDiv.innerHTML += `**${chat.sender}** (${chat.time})\n${chat.message}\n\n`;
    });
}

WeChatInfo - 微信聊天记录导出工具 📱🔐
产品简介

WeChatInfo 是一个基于网页的工具，用于提取并导出微信的聊天记录。用户可以通过上传 MicroMsg.db 数据库文件，快速解析微信的聊天记录并将其导出为 Markdown 格式。该工具支持 去除图片、语音和表情包，只保留纯文本聊天记录。

使用方法 🚀
1. 访问网页

你可以直接访问工具页面：[WeChatInfo](https://milab-bit.github.io/WeChatInfo/)
。

2. 上传微信数据库

从你的设备中获取 MicroMsg.db 文件。

点击网页中的 上传按钮，选择并上传该文件。

3. 分析聊天记录

上传文件后，工具会自动解析数据库中的聊天记录，并去除图片、语音等非文本内容。解析后的聊天记录将以 Markdown 格式 展示在页面上。

4. 导出聊天记录

你可以将解析后的聊天记录复制或保存为 Markdown 文件，便于查看和保存。

克隆方案

如果你想将此项目克隆到本地并进行修改，可以按照以下步骤操作：

克隆仓库
打开终端并运行以下命令，将仓库克隆到本地：

git clone https://github.com/your-username/WeChatInfo.git

安装依赖
进入项目文件夹：

cd WeChatInfo

运行本地服务器
如果你希望在本地运行该工具，可以通过以下命令启动本地服务器：

npm install
npm start

访问本地页面
启动后，在浏览器中访问 http://localhost:3000，即可在本地使用该工具。

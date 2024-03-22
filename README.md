# cmsimde_site

利用 init_replit 指令安裝所需 Python 模組

chmod u+x init_replit

./init_replit

python3 main.py //可以執行動態網站

git add .

git commit -m "備註"  //可以推回去github

git push

python3 -m http.server  //開啟靜態網站

git status //查看狀態

git submodule //子模組的東西

xelatex report_win.txt(檔名   //把檔案內的東西轉成PDF

倉儲: <a href="https://github.com/Corn723/cd2024">https://github.com/Corn723/cd2024</a>

網站: <a href="https://corn723.github.io/cd2024">https://corn723.github.io/cd2024</a>

簡報: <a href="https://corn723.github.io/cd2024/reveal">https://corn723.github.io/cd2024/reveal</a>

網誌: <a href="https://corn723.github.io/cd2024/blog">https://corn723.github.io/cd2024/blog</a>

On Replit:

for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent

password generator: https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py 

for IPv6 only Ubuntu:

.ssh 目錄中的 config, 將 SSH session 名稱設為 github.com:

Host github.com
User git
Hostname github.com
ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p

for Replit:

.ssh 目錄中的 config, 將 SSH session 名稱設為 github.com:

Host github.com
User git
Hostname github.co
#since Replit works for IPv4, therefore no ProxyCommand setting needed
#ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p

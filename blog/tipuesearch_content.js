var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/Corn723/cd2024 網站: https://corn723.github.io/cd2024 簡報: https://corn723.github.io/cd2024/reveal 網誌: https://corn723.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"W16 教學內容","text":"第十六週教學內容 下周交代事項 以下都是整組去做的 1.需要會編輯網頁及網誌並推送 2.需要繪製零件匯入CoppeliaSim並用程式使他動 那我不會","tags":"41123135","url":"./W16 41123135.html"},{"title":"W15 教學內容","text":"第十五週教學內容","tags":"41123135","url":"./W15 41123135.html"},{"title":"W14 教學內容","text":"第十四週教學內容","tags":"41123135","url":"./W14 41123135.html"},{"title":"W13 教學內容","text":"第十三週教學內容 協助隊友完成足球機器人模擬 教學網站 隊友遇到第一個問題是在執行下列程式時沒有下載模組 那我幫他們用pip install + 要載的模組名字 把所需要的模組都載到可攜環境 主要載了pyzmq cbor keyboard這三個模組 pip install pyzmq cbor keyboard # pip install pyzmq cbor keyboard from zmqRemoteApi import RemoteAPIClient from zmqRemoteApi_IPv6 import RemoteAPIClient import keyboard import random client = RemoteAPIClient('localhost', 23000) print('Program started') sim = client.getObject('sim') sim.startSimulation() print('Simulation started') def avoid(x,y): #bubbleRob = sim.getObject('/brickRob') #bubbleRob2 = sim.getObject('/brickRob2') #b1=sim.getObjectPosition(bubbleRob,-1) #b2=sim.getObjectPosition(bubbleRob2,-1) #while (((b1[0] x-0.5)) and ((b1[1] y-0.5)))or(((b2[0] x-0.5)) and ((b2[1] y-0.5))): #x=random.uniform(-1,1) #y=random.uniform(-1,1) # print(x) # print(y) position2= [x, y, 2] ball = sim.createPureShape(1, options, size, 1, None) sim.setObjectPosition(ball, -1, position2) size = [0.1, 0.1, 0.1] position = [0, 0, 2] options = 8 def existball(): try: Sphere= sim.getObject('/Sphere') except Exception as e: #print(\"Failed to get object: \", e) return 1 return 0 if existball()==1: ball = sim.createPureShape(1, options, size, 1, None) sim.setObjectPosition(ball, -1, position) ball = sim.getObject('/Sphere') sim.setObjectSpecialProperty(ball, sim.objectspecialproperty_detectable) while True: ball = sim.getObject('/Sphere') ball_position =sim.getObjectPosition(ball,-1) if ball_position[1]<-1.865 or ball_position[1]>1.865: #sim.removeObject(ball) sim.setObjectAlias(ball, 'ball') ball2=sim.getObject('/ball') sim.removeObject(ball2) avoid(random.uniform(-1,1),random.uniform(-1,1)) #avoid(0,2) ball = sim.getObject('/Sphere') sim.setObjectSpecialProperty(ball, sim.objectspecialproperty_detectable)","tags":"41123135","url":"./W13 41123135.html"},{"title":"W12 教學內容","text":"第十二週教學內容 這周我腸胃炎請假 在家進行分組網誌統整 請組員把blog的格式改成指定的格式 以下為老師的教學影片:","tags":"41123135","url":"./W12 41123135.html"},{"title":"W11 教學內容","text":"第十一週教學內容 練習分支合併到主分支 在2astud-2asite中的網站放入個人的心得 以下是老師的影片說明: 練習結果","tags":"41123135","url":"./W11 41123135.html"},{"title":"W10 教學內容","text":"第十週教學內容 建立2a各學員的倉儲連結及分組倉儲連結 RUN完從左到右分別是學員網頁、學員倉儲、學員分組網頁、學員分組倉儲 測試連結 以下為程式主體 from browser import window, ajax, document, html def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 必須去除 data 的第一列標題資料, 只取序號為 1 之後的資料 data = data[1:] # 取得 html 可以插入的標註位置 brython_div = document[\"brython_div1\"] course_title = \"cd2024\" # 逐一處理學員資料 index = 0 for items in data: index += 1 student_id, github_username, group = items if github_username == \"\": github_username = \"000\" # 建立網站和倉儲連結，使用正確的模板 site_url = f\"https://{github_username}.github.io/{course_title}\" repo_url = f\"https://github.com/{github_username}/{course_title}\" group_site_url = f\"https://mdecd2024.github.io/2a-midag{group}\" group_repo_url = f\"https://github.com/mdecd2024/2a-midag{group}\" # 添加學號, 網站, 倉儲連結和序號到 brython_div brython_div <= str(index) + \". \" + html.A(student_id, href=site_url) brython_div <= \" (\" brython_div <= html.A(\"repo\", href=repo_url) brython_div <= \") | \" brython_div <= html.A(\"Group Site\", href=group_site_url) brython_div <= \" | \" brython_div <= html.A(\"Group Repo\", href=group_repo_url) brython_div <= html.BR() else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 呼叫函式讀取 CSV 資料 fetch_csv_data()","tags":"41123135","url":"./W10 41123135.html"},{"title":"W9 教學內容","text":"第九周教學內容 上傳期中自評成績 在teams中有2a自評成績表單連結 只要在教師指定時間內輸入自己的自評分數即可 41123135輸入了:69分","tags":"41123135","url":"./W9 41123135.html"},{"title":"W8 教學內容","text":"第八周教學內容 在分組倉儲編寫可以一次性更新全組子模組的檔案 我在分組倉儲更新了一個檔案 他可以一次更新全組的 不用一個一個更新 檔案連結 以下為檔案內容 git submodule update --init cd 41123122 git pull origin main cd .. cd 41123129 git pull origin main cd .. cd 41123131 git pull origin main cd .. cd 41123134 git pull origin main cd .. cd 41123135 git pull origin main cd .. cd 41123137 git pull origin main cd .. cd 41123139 git pull origin main cd .. cd 41123149 git pull origin main cd ..","tags":"41123135","url":"./W8 41123135.html"},{"title":"W7 教學內容","text":"本週放假 放假去瞜 好開心","tags":"41123135","url":"./W7 41123135.html"},{"title":"W6 教學內容","text":"查看各分組網站進度，教學更新分組個人子模組 教學更新子模組 下列是利用app把背景噪音消除的版本 利用 pelicanconf py 整合各組員的網誌 下列是利用app把背景噪音消除的版本","tags":"41123135","url":"./W6 41123135.html"},{"title":"W5 教學內容","text":"教學如何在分組倉儲的Replit加上ssh協定 如何在分組倉儲的Replit加上ssh協定 在分組倉儲中的blog加上W4各組員所做的成果並進行自我評分 分組的blog 完成後在cd2024的teams中進行留言給教師","tags":"41123135","url":"./W5 41123135.html"},{"title":"W4 教學內容","text":"把之前的影片加上逐字稿及字幕和大綱 上影片字幕及逐字稿和大綱 我把 這個影片 加上了字幕並新增逐字稿和大綱 逐字稿.txt 利用Codespaces進行維護倉儲 打開Codespaces 並先使用chmod u+x init_replit 來讓檔案有權限 接下來使用./init_replit 讓程式自動跑 (下載各種模組 再來就可以使用python3 server.py 來執行動態網站了 python3 -m http.server 可以執行靜態網站 之後再用 git add + commit + push 即可推回倉儲 成品在 這個分組網站 內，大綱在網頁底下，逐字稿為底下的.txt檔","tags":"41123135","url":"./W4 41123135.html"},{"title":"W3 教學內容","text":"教學如何在分組倉儲內加入組員的倉儲當子模組 並教學如何使用Latex轉成PDF和教學把組員個人倉儲內的分配的Latex合併為分組的報告PDF 把組員的倉儲做成分組倉儲的子模組 進入分組倉儲的Codespaces 在終端機中輸入以下指令 git submodule add 組員的個人倉儲網址.git 組員的學號 完成後再進行push回去分組倉儲即可 教學影片 對分組倉儲內的各組員子模組進行更新版本 開啟分組倉儲的Codespaces 進入該組員的學號目錄中 輸入 git pull origin main 即可取下該組員的最新版本 取下後記得回去分組倉儲執行 push 來把整個倉儲推回去github 使用Latex 進行分組報告 使用一個.txt檔案 內容需要按照Latex的格式編寫 編寫完成後使用 xelatex report_win.txt 這個指令把report_win.txt轉成我們所需要的PDF (report_win.txt 是檔案名稱) 檔案名稱可以更改 教學影片","tags":"41123135","url":"./W3 41123135.html"},{"title":"W2 教學內容","text":"利用 Github Classroom 進行分組 並利用 Github Codespaces 維護個人或分組網站 利用 Github Classroom 進行分組 進入cd2024的teams 教師有發布 Classroom 連結 學員自行分組 最多八人 分好後進入連結創立組別並加入 組別名稱為midag+第幾組 利用 Github Codespaces 維護個人或分組網站 一個帳號每個月有120小時的使用權限 使用 Codespaces 更新個人網站示範 示範影片 若是要對分組網站進行更新的話 建議用 Codespaces 理由是使用Replit的話，分組網站是建立在 mdecd2024 帳號下，若是要推回去的話沒有權限，所以需要做一些前置作業讓Replit跟github取得連結，步驟相對於 Codespaces 來說相對繁瑣 使用Replit更新分組網站示範 影片連結 在近端執行動態網站 影片連結","tags":"41123135","url":"./W2 41123135.html"},{"title":"W1 教學內容","text":"進行課程開始的前置步驟 W1 教學內容內容 進入課程的teams 打開teams並輸入 p0961sy (只有學校帳號可以用) 創建學員倉儲 每位學員從 https://github.com/mdecycu/cmsimde_site 作為 Template新增一個名為 cd2024 的倉儲 下載可攜式套件 下載可攜程式環境: portable_2024.7z 下載: miktex-portable.7z 密碼皆為kmolab 將倉儲導入至Replit並推回倉儲改版 用之前幾個學期的方法導入 詳細影片: 導入過程 如何更改網誌 主要為編輯 markdown下的.md檔案 請記得編輯完記得使用gen_blog 詳細影片: 更改過程","tags":"41123135","url":"./W1 41123135.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"41123135","url":"./W0 41123135.html"}]};
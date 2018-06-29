1. Create Repo (GitHub REST API)
-> curl -u 'kwokhung' https://api.github.com/user/repos -d '{"name":"smartHid"}'

2. Init Repo (VSCode)

git remote add origin https://github.com/kwokhung/eight.git
tsc --init
git push -u origin master
npm init -y
npm install @types/node --save-dev
npm install mqtt --save
npm install @types/mqtt --save-dev
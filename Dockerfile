from  node:9-slim
workdir /app
copy package.json /app
run  npm install
copy . /app
cmd ["npm","start"]

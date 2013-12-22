
git config --global http.proxy fr-proxy.groupinfra.com:3128
git config --global https.proxy fr-proxy.groupinfra.com:3128

export http_proxy=http://fr-proxy.groupinfra.com:3128
export https_proxy=http://fr-proxy.groupinfra.com:3128

npm config set proxy http://fr-proxy.groupinfra.com:3128
npm config set https-proxy http://fr-proxy.groupinfra.com:3128

<samp>
<div align="center">

# Chain Justice

</div>

## What is Chain Justice

Chain Justice is a Blockchain Game running **as** a Blockchain.  
Game rule is written in a chain and everyone can create sub game on it. 

## Game Rule

## Game Vision

## Token Economics

## Technical Description

## How to try Demo
### Demo Version

### Try on a Local Computer
Cosmos Sdk を用いているので、一般的な方法でチェーンを起動することができます。  

1. `ignite chain serve --reset-once` でチェーンを起動します。
1. `ignite generate ts-client`, `ignite generate vuex` を実行し、クライアントのファイルを更新します。
1. `cd vue && npm ci && npm run dev` でクライアントを起動します。
1. Google Chrome にCosmos系のウォレットのKeplrをインストールします。
1. Google Chrome で localhost:3000 へアクセスし、Keplrを連携します。
1. Faucet から token を取得して、遊びましょう！

### Try this chain as blockchain node
```
ignite chain build --clear-cache --output ./ 
./chain-justiced init shohet --chain-id justice
./chain-justiced keys add shohet
./chain-justiced add-genesis-account <上で出てきたアドレス> 1000000token,100000000stake
./chain-justiced gentx shohet 1000000stake --chain-id justice
./chain-justiced start
```

</samp>

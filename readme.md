<samp>
<div align="center">

# Chain Justice
[![Go Report Card](https://goreportcard.com/badge/github.com/CosmWasm/wasmd)](https://goreportcard.com/report/github.com/chain-justice/chain-justice)
</div>

## What is Chain Justice

Chain Justice is a Blockchain Game running **as** a Blockchain.  
Game rule is written in a chain and everyone can create sub game on it. 

## Game Rule

## Game Vision

## Token Economics
プレイヤーはゲームをプレイすることで、国主から報酬を受けます。  
報酬はゲーム内で消費するか、外部の価値に交換することができます。  
また、国主は独自のERCトークンなどを報酬にすることができ、内部に独自の経済圏を作ることも可能です  

## Technical Description
以下の技術を用いました
1. Cosmos SDK
   1. chainの生成
   1. Blockchain の module の作成
1. Vue
   1. chainとの接続（starportをもとに新しくコンポーネントを作成・一部既存バクの修正）
   1. 操作画面の作成

スマートコントラクトのコードは、`./x/` 配下の goファイルとなります。  

## How to try Demo
### Demo Version

### Try on a Local Computer
Cosmos Sdk を用いているので、一般的な方法でチェーンを起動することができます。  
※ ignite のバージョンは `0.25.1` をお使いください（2022.11.12時点の最新）

1. `ignite chain serve --reset-once` でチェーンを起動します。
1. 別のターミナルを起動し、`ignite generate ts-client`, `ignite generate vuex` を実行し、クライアントのファイルを更新します。
1. `cd vue && npm ci && npm run dev` でクライアントを起動します。
1. Google Chrome にCosmos系のウォレットのKeplrをインストールします。
1. Google Chrome で localhost:3000 へアクセスし、Keplrを連携します。
1. Faucet から token を取得して、遊びましょう！

### Try this chain as blockchain node
実行ファイルとしてビルドし、実行する場合は以下の手順となります。
  
```
ignite chain build --clear-cache --output ./ 
./chain-justiced init shohet --chain-id justice
./chain-justiced keys add shohet
./chain-justiced add-genesis-account <上で出てきたアドレス> 1000000token,100000000stake
./chain-justiced gentx shohet 1000000stake --chain-id justice
./chain-justiced start
```

</samp>

# react-blog

## 必要環境
- [Node.js](https://nodejs.org/ja/) v12.14.1

## インストールからローカル実行まで

```shell
npm i

# webサーバ+ファイル監視+ブラウザーシンク
npm run hot &
# api mockサーバを起動
npm run mock &

# バックグラウンドで動くので消したいときは以下
# ジョブを確認
jobs
# フォアグラウンドに持ってきて、Ctrl-C
fg
```
実行後以下にアクセス
- Web: http://127.0.0.1:8080
- APIのmockサーバ: http://127.0.0.1:4010

## コマンド類

```shell
# eslintをかける
npm run lint
# eslintかけ、修正
npm run lint:fix

# 開発用ビルド
npm run build

# プロダクト用ビルド
npm run build:prod
```
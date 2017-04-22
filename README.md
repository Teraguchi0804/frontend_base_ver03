#frontend_base_ver02
===============================

静的サイト制作用の汎用テンプレート<br>
node.js v5.12.0、npm 3.8.6で動作確認済み

## インストール
```bash
npm install
```


## 概要

`gulp default` コマンドでローカルサーバが立ち上がります。実行中は
```
http://localhost: 3000/
```
で展開後のページが確認できます。


## 主要タスク

```
gulp default
```
ディレクトリを監視し、変更があった場合適宜`gulp/task/` の中身の各種タスクを処理しコンパイルします。


```
gulp publish
```
`htdocs/` ディレクトリ内に階層構造を保ちつつコンパイル、minifyしたそれぞれのファイルを出力します。

各種タスクの詳細は `gulpfile.babel.js` をご参照ください。

*主要モジュールのバージョン*

 - `gulp` : v3.9.1 
 - `webpack` : v1.13.2 
 
  ※その他はpacckage.jsonを参照
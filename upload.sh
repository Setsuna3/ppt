#!/bin/bash

# 提示用户输入提交信息
read -p "请输入提交信息: " commit_message

# 执行 git add . 
git add .

# 提交到本地仓库
git commit -m "$commit_message"

# 推送到远程仓库
git push -u origin master

# 完成后提示
echo "代码已成功提交并推送到远程仓库！"
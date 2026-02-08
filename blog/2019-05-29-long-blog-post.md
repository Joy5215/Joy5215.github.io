---
slug: vscode 无法输入中文
title: vscode 无法输入中文
tags: [ubuntu, vscode]
---
>如果是用snap安装的，据说因为阉割版的缘故一定概率出现无法打出中文的现象

解决方法：卸载snap安装的vsode，不要删除配置（否则之前配置完的C/C++什么的都得重新配），重新安装apt版

利用ai做了个脚本，可以安全卸载snap版并将配置迁移到apt版，已经执行```sudo snap remove code ```但是没删配置文件的也可以用。打开apt版的vscode检查过没问题后可自行删除备份的配置文件.
## 使用方法
1. 打开终端,复制脚本内容，保存并关闭
```
gedit ~/Desktop/vscode_snapToApt.sh
```
2. 开执行权限并执行脚本
```
sudo chmod +x ~/Desktop/vscode_snapToApt.sh
~/Desktop/vscode_snapToApt.sh
```
## 脚本内容
```
#!/bin/bash
set -e

echo "===== VS Code Snap → APT 迁移脚本（增强版） ====="

safe_remove_snap_code() {
    echo "尝试安全卸载 Snap VS Code..."

    pkill -f code || true
    sudo snap stop code || true

    echo "解除 Snap 挂载点..."
    sudo umount -l "$HOME/snap/code/current" 2>/dev/null || true
    sudo umount -l "$HOME/snap/code"/* 2>/dev/null || true

    echo "清理 Snap 用户目录..."
    rm -rf "$HOME/snap/code/current"/*
    rm -rf "$HOME/snap/code"

    echo "执行 snap remove..."
    sudo snap remove code || true
}


# ---------- 路径定义 ----------
SNAP_CODE_DIR="$HOME/snap/code/current"
SNAP_CONFIG_DIR="$SNAP_CODE_DIR/.config/Code"
SNAP_EXT_DIR="$SNAP_CODE_DIR/.vscode"

APT_CONFIG_DIR="$HOME/.config/Code"
APT_EXT_DIR="$HOME/.vscode"

BACKUP_DIR="$HOME/vscode-backup"

FOUND_CONFIG=false

# ---------- Step 1：检测 Snap 风格配置 ----------
if [ -d "$SNAP_CONFIG_DIR" ]; then
    FOUND_CONFIG=true
fi

if [ -d "$SNAP_EXT_DIR" ]; then
    FOUND_CONFIG=true
fi

if [ "$FOUND_CONFIG" = false ]; then
    echo "未检测到 Snap 风格 VS Code 配置，脚本结束"
    exit 0
fi

echo "检测到 Snap 风格 VS Code 配置"

# ---------- Step 2：备份配置 ----------
echo "备份 Snap 配置..."
mkdir -p "$BACKUP_DIR"

if [ -d "$SNAP_CONFIG_DIR" ]; then
    cp -r "$SNAP_CONFIG_DIR" "$BACKUP_DIR/Code"
fi

if [ -d "$SNAP_EXT_DIR" ]; then
    cp -r "$SNAP_EXT_DIR" "$BACKUP_DIR/.vscode"
fi

# ---------- Step 3：卸载 Snap 版 VS Code（如存在） ----------
if snap list | grep -q '^code '; then
    safe_remove_snap_code
else
    echo "未检测到已安装的 Snap VS Code，继续迁移配置"
fi


# ---------- Step 4：安装 APT 版 VS Code ----------
if ! command -v code &> /dev/null || [[ "$(which code 2>/dev/null)" != "/usr/bin/code" ]]; then
    echo "安装 APT 版 VS Code..."

    sudo apt update
    sudo apt install -y wget gpg apt-transport-https

    wget -qO- https://packages.microsoft.com/keys/microsoft.asc \
        | gpg --dearmor \
        | sudo tee /usr/share/keyrings/microsoft.gpg > /dev/null

    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] \
https://packages.microsoft.com/repos/code stable main" \
        | sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null

    sudo apt update
    sudo apt install -y code
else
    echo "APT 版 VS Code 已安装，跳过"
fi

# ---------- Step 5：恢复配置 ----------
echo "恢复配置到 APT 路径..."

mkdir -p "$APT_CONFIG_DIR" "$APT_EXT_DIR"

if [ -d "$BACKUP_DIR/Code" ]; then
    cp -r "$BACKUP_DIR/Code" "$HOME/.config/"
fi

if [ -d "$BACKUP_DIR/.vscode" ]; then
    cp -r "$BACKUP_DIR/.vscode" "$HOME/"
fi

# ---------- Step 6：验证 ----------
echo "验证 code 命令来源："
which code || echo "code 尚未加入 PATH（重开终端即可）"

echo "===== 迁移完成 ====="
echo "✔ Snap 风格配置已迁移"
echo "✔ APT 版 VS Code 已就绪"
echo "✔ 配置备份位于：$BACKUP_DIR"
```

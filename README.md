# Xime Index

Xime 输入法的插件与方案市场索引。

## 目录结构

```
├── index.yaml              # 市场主索引（引用子索引）
├── rimes/
│   ├── index.yaml          # 方案子索引
│   ├── wubi86.yaml         # 各方案独立配置
│   ├── wubi86_pinyin.yaml
│   ├── pinyin_simp.yaml
│   ├── rime-ice.yaml
│   ├── wubi98.yaml
│   ├── terra_pinyin.yaml
│   └── double_pinyin.yaml
├── plugins/
│   ├── index.yaml          # 插件子索引
│   ├── xime.kaomoji.yaml   # 各插件独立配置
│   └── xime.meme-bunny.yaml
├── CONTRIBUTING.md         # 上架指南
└── .github/
    └── workflows/          # CI 校验
```

## 工作原理

```
App ──HTTP──→ index.yaml ──→ 展示列表 ──→ 用户选择安装
                                        │
                                        ├── 方案：下载 → 解压 → 部署
                                        └── 插件：下载 → 安装 APK
```

## 上架

见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可

[CC BY-NC-SA 4.0](LICENSE) — 署名-非商业性使用-相同方式共享


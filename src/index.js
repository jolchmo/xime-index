/**
 * Xime Index Worker
 * 代理 GitHub raw 文件，添加正确的 Content-Type 和 CORS 头
 */
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // 根路径默认返回 index.yaml
    if (path === "/") {
      path = "/index.yaml";
    }

    // 只允许访问 .yaml 文件
    if (!path.endsWith(".yaml")) {
      return new Response("Not Found", { status: 404 });
    }

    // 从 GitHub raw 获取文件
    const githubRaw = `https://raw.githubusercontent.com/ximeiorg/xime-index/main${path}`;
    const response = await fetch(githubRaw);

    if (!response.ok) {
      return new Response("Not Found", { status: 404 });
    }

    const content = await response.text();

    return new Response(content, {
      headers: {
        "Content-Type": "text/yaml; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=600",
      },
    });
  },
};
